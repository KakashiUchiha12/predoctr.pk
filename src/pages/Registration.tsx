import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, MessageCircle } from 'lucide-react';

interface StudentFormData {
  fullName: string;
  fatherName: string;
  whatsappNumber: string;
  email: string;
  currentClass: string;
  collegeName: string;
  mdcatStatus: string;
  previousMdcattScore: string;
  pastYearMarks: string;
  fscPart1Marks: string;
  fscPart2Marks: string;
  location: string;
  preferredStudyMode: string;
  province: string;
}

const Registration = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<StudentFormData>({
    fullName: '',
    fatherName: '',
    whatsappNumber: '',
    email: '',
    currentClass: '',
    collegeName: '',
    mdcatStatus: '',
    previousMdcattScore: '',
    pastYearMarks: '',
    fscPart1Marks: '',
    fscPart2Marks: '',
    location: '',
    preferredStudyMode: '',
    province: ''
  });

  const [errors, setErrors] = useState<Partial<StudentFormData>>({});
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [googleButtonEnabled, setGoogleButtonEnabled] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (field: keyof StudentFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<StudentFormData> = {};

    // Basic required fields validation
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.fatherName.trim()) newErrors.fatherName = 'Father name is required';
    if (!formData.whatsappNumber.trim()) newErrors.whatsappNumber = 'WhatsApp number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.currentClass) newErrors.currentClass = 'Current class is required';
    if (!formData.collegeName.trim()) newErrors.collegeName = 'College name is required';
    if (!formData.mdcatStatus) newErrors.mdcatStatus = 'MDCAT status is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.preferredStudyMode) newErrors.preferredStudyMode = 'Study mode is required';
    if (!formData.province) newErrors.province = 'Province is required';

    // Repeater specific validation
    if (formData.mdcatStatus === 'repeater') {
      if (!formData.previousMdcattScore.trim()) newErrors.previousMdcattScore = 'Previous MDCAT score is required';
      if (!formData.pastYearMarks.trim()) newErrors.pastYearMarks = 'Past year marks are required';
      if (!formData.fscPart1Marks.trim()) newErrors.fscPart1Marks = 'FSc Part 1 marks are required';
      if (!formData.fscPart2Marks.trim()) newErrors.fscPart2Marks = 'FSc Part 2 marks are required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (Pakistani format)
    const phoneRegex = /^03[0-9]{9}$/;
    if (formData.whatsappNumber && !phoneRegex.test(formData.whatsappNumber.replace(/[\s\-\+\(\)]/g, ''))) {
      newErrors.whatsappNumber = 'Please enter a valid Pakistani mobile number (e.g., 03001234567)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsAppMessage = (): string => {
    const baseMessage = `Hi, this is ${formData.fullName}. I'm interested in learning more about the MDCAT session. Here are my details:

---

*Basic Info:*  
- *Full Name:* ${formData.fullName}  
- *Father's Name:* ${formData.fatherName}  
- *WhatsApp Number:* ${formData.whatsappNumber}  
- *Email Address:* ${formData.email}
---
*Academic Details:*  
- *Current Class:* ${formData.currentClass}  
- *College Name:* ${formData.collegeName}
---
*MDCAT Status:*  
- *MDCAT Status:* ${formData.mdcatStatus === 'fresher' ? 'Fresher' : 'Repeater'}${formData.mdcatStatus === 'repeater' ? `
  *(If Repeater, please include the following)*  
- *Previous MDCAT Score:* ${formData.previousMdcattScore}  
- *Past Year Marks:* ${formData.pastYearMarks}
- *FSc Part 1 Marks:* ${formData.fscPart1Marks}
- *FSc Part 2 Marks:* ${formData.fscPart2Marks}` : ''}
---
*Additional Info:*  
- *Location (City):* ${formData.location}  
- *Preferred Study Mode:* ${formData.preferredStudyMode === 'online' ? 'Online' : 'Offline'}  
- *Province:* ${formData.province}
---t
Looking forward to your response. Thanks!`;

    return encodeURIComponent(baseMessage);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      submitToGoogleSheets();
    }
  };

  const submitToGoogleSheets = async () => {
    setIsSubmitting(true);

    try {
      // Google Apps Script web app URL for form submissions
      const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyFIFlU8bbGQBO3Slenv8LyYWxuPr-SqX6jYbWqyemiJezU4FqP_VP0p0-frnfGDiSp/exec';

      // Create URL-encoded form data
      const formDataToSend = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString(),
      });

      const result = await response.json();

      if (result.success) {
        // Success - show thank you and enable Google button
        setRegistrationComplete(true);
        setGoogleButtonEnabled(true);
        setShowThankYou(true);

        // Keep the success message visible persistently
      } else {
        // Handle error
        alert('Error saving registration: ' + (result.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'} min-h-screen`}>
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </div>
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Start Your MDCAT Journey
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
              Fill out this form to get personalized guidance and start your path to medical college success.
            </p>
          </div>

          {/* Show form only if registration is not complete */}
          {!registrationComplete && (
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Basic Information */}
              <Card className={theme === 'dark' ? 'bg-slate-800 border-slate-600' : 'bg-white'}>
                <CardHeader>
                  <CardTitle className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                    Basic Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="fullName" className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="Enter your full name"
                      className={`${errors.fullName ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? '' : 'bg-white'}`}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <Label htmlFor="fatherName" className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                      Father's Name *
                    </Label>
                    <Input
                      id="fatherName"
                      value={formData.fatherName}
                      onChange={(e) => handleInputChange('fatherName', e.target.value)}
                      placeholder="Enter your father's name"
                      className={`${errors.fatherName ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? '' : 'bg-white'}`}
                    />
                    {errors.fatherName && <p className="text-red-500 text-sm mt-1">{errors.fatherName}</p>}
                  </div>

                  <div>
                    <Label htmlFor="whatsappNumber" className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                      WhatsApp Number *
                    </Label>
                    <Input
                      id="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                      placeholder="03001234567"
                      className={`${errors.whatsappNumber ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? '' : 'bg-white'}`}
                    />
                    {errors.whatsappNumber && <p className="text-red-500 text-sm mt-1">{errors.whatsappNumber}</p>}
                  </div>

                  <div>
                    <Label htmlFor="email" className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className={`${errors.email ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? '' : 'bg-white'}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </CardContent>
              </Card>

              {/* Academic Details */}
              <Card className={theme === 'dark' ? 'bg-slate-800 border-slate-600' : 'bg-white'}>
                <CardHeader>
                  <CardTitle className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                    Academic Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="currentClass" className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                      Current Class *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('currentClass', value)}>
                      <SelectTrigger className={`${errors.currentClass ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? '' : 'bg-white'}`}>
                        <SelectValue placeholder="Select your current class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="11th">11th Grade</SelectItem>
                        <SelectItem value="12th">12th Grade</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.currentClass && <p className="text-red-500 text-sm mt-1">{errors.currentClass}</p>}
                  </div>

                  <div>
                    <Label htmlFor="collegeName" className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                      College Name/Board *
                    </Label>
                    <Input
                      id="collegeName"
                      value={formData.collegeName}
                      onChange={(e) => handleInputChange('collegeName', e.target.value)}
                      placeholder="Enter your college name"
                      className={`${errors.collegeName ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? '' : 'bg-white'}`}
                    />
                    {errors.collegeName && <p className="text-red-500 text-sm mt-1">{errors.collegeName}</p>}
                  </div>

                  <div>
                    <Label htmlFor="mdcatStatus" className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                      MDCAT Status *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('mdcatStatus', value)}>
                      <SelectTrigger className={`${errors.mdcatStatus ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? '' : 'bg-white'}`}>
                        <SelectValue placeholder="Are you a fresher or repeater?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fresher">Fresher</SelectItem>
                        <SelectItem value="repeater">Repeater</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.mdcatStatus && <p className="text-red-500 text-sm mt-1">{errors.mdcatStatus}</p>}
                  </div>
                </CardContent>
              </Card>

              {/* Repeater Fields (Conditional) */}
              {formData.mdcatStatus === 'repeater' && (
                <Card className={`lg:col-span-2 ${theme === 'dark' ? 'bg-slate-800 border-slate-600' : 'bg-white'}`}>
                  <CardHeader>
                    <CardTitle className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                      Repeater Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="previousMdcattScore" className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                          Previous MDCAT Score *
                        </Label>
                        <Input
                          id="previousMdcattScore"
                          value={formData.previousMdcattScore}
                          onChange={(e) => handleInputChange('previousMdcattScore', e.target.value)}
                          placeholder="e.g., 180/200"
                          className={`${errors.previousMdcattScore ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}
                        />
                        {errors.previousMdcattScore && <p className="text-red-500 text-sm mt-1">{errors.previousMdcattScore}</p>}
                      </div>

                      <div>
                        <Label htmlFor="pastYearMarks" className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                          Past Year Marks *
                        </Label>
                        <Input
                          id="pastYearMarks"
                          value={formData.pastYearMarks}
                          onChange={(e) => handleInputChange('pastYearMarks', e.target.value)}
                          placeholder="e.g., 1020/1100"
                          className={`${errors.pastYearMarks ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}
                        />
                        {errors.pastYearMarks && <p className="text-red-500 text-sm mt-1">{errors.pastYearMarks}</p>}
                      </div>

                      <div>
                        <Label htmlFor="fscPart1Marks" className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                          FSc Part 1 Marks *
                        </Label>
                        <Input
                          id="fscPart1Marks"
                          value={formData.fscPart1Marks}
                          onChange={(e) => handleInputChange('fscPart1Marks', e.target.value)}
                          placeholder="e.g., 480/550"
                          className={`${errors.fscPart1Marks ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}
                        />
                        {errors.fscPart1Marks && <p className="text-red-500 text-sm mt-1">{errors.fscPart1Marks}</p>}
                      </div>

                      <div>
                        <Label htmlFor="fscPart2Marks" className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                          FSc Part 2 Marks *
                        </Label>
                        <Input
                          id="fscPart2Marks"
                          value={formData.fscPart2Marks}
                          onChange={(e) => handleInputChange('fscPart2Marks', e.target.value)}
                          placeholder="e.g., 510/550"
                          className={`${errors.fscPart2Marks ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}
                        />
                        {errors.fscPart2Marks && <p className="text-red-500 text-sm mt-1">{errors.fscPart2Marks}</p>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Additional Information */}
              <Card className={`lg:col-span-2 ${theme === 'dark' ? 'bg-slate-800 border-slate-600' : 'bg-white'}`}>
                <CardHeader>
                  <CardTitle className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                    Additional Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="location" className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                        Location (City) *
                      </Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="e.g., Lahore"
                      className={`${errors.location ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? '' : 'bg-white'}`}
                    />
                      {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                    </div>

                    <div>
                      <Label htmlFor="preferredStudyMode" className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                        Preferred Study Mode *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('preferredStudyMode', value)}>
                        <SelectTrigger className={`${errors.preferredStudyMode ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? '' : 'bg-white'}`}>
                          <SelectValue placeholder="Select study mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="online">Online</SelectItem>
                          <SelectItem value="offline">Offline</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.preferredStudyMode && <p className="text-red-500 text-sm mt-1">{errors.preferredStudyMode}</p>}
                    </div>

                    <div>
                      <Label htmlFor="province" className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                        Province *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('province', value)}>
                        <SelectTrigger className={`${errors.province ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? '' : 'bg-white'}`}>
                          <SelectValue placeholder="Select your province" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="punjab">Punjab</SelectItem>
                          <SelectItem value="sindh">Sindh</SelectItem>
                          <SelectItem value="kpk">Khyber Pakhtunkhwa</SelectItem>
                          <SelectItem value="balochistan">Balochistan</SelectItem>
                          <SelectItem value="islamabad">Islamabad Capital Territory</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.province && <p className="text-red-500 text-sm mt-1">{errors.province}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Already Registered Link */}
            <div className="text-center mt-6">
              <a
                href="https://lms.predoctr.pk/student-registration/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm underline hover:no-underline transition-all duration-200 ${
                  theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Already registered? Sign in here
              </a>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-4">
              <Button
                type="submit"
                size="lg"
                className="bg-crypto-purple hover:bg-crypto-dark-purple text-white px-8 py-4 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                {!isSubmitting && <MessageCircle className="ml-2 h-5 w-5" />}
              </Button>
            </div>
          </form>
          )}

          {/* Thank You Message with Animation */}
          {showThankYou && (
            <div className="text-center mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4 animate-in zoom-in-50 duration-300 delay-150" />
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2 animate-in fade-in-0 duration-300 delay-300">
                Registration Successful!
              </h3>
              <p className="text-green-700 dark:text-green-300 animate-in fade-in-0 duration-300 delay-500">
                Your information has been saved. You can now proceed to sign in with Google.
              </p>
            </div>
          )}

          {/* Google Sign In Button - Always visible but disabled until registration complete */}
          <div className="text-center mt-8">
            <div className="w-3/4 sm:w-auto max-w-xs sm:max-w-sm mx-auto">
              <div className="relative overflow-hidden group/btn transition-all duration-300 hover:scale-105 rounded-lg">
                <div
                  className={`flex items-center justify-center px-4 sm:px-6 py-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer ${
                    googleButtonEnabled ? '' : 'opacity-50 cursor-not-allowed grayscale'
                  }`}
                  style={{
                    fontFamily: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
                    fontSize: '14px',
                    fontWeight: '500',
                    letterSpacing: '0.25px',
                    color: '#3c4043',
                    height: '48px'
                  }}
                  onClick={() => {
                    if (googleButtonEnabled) {
                      // Redirect to LMS registration page
                      window.open('https://lms.predoctr.pk/student-registration', '_blank');
                    }
                  }}
                >
                  {/* Google Logo */}
                  <div className="flex items-center justify-center mr-3">
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  {/* Button Text */}
                  <span className="flex-1 text-center">
                    {googleButtonEnabled ? 'Sign in with Google' : 'Complete registration first'}
                  </span>
                </div>

                {/* Gradient overlay for animation */}
                {googleButtonEnabled && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Registration;
