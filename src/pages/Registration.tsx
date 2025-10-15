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
---
Looking forward to your response. Thanks!`;

    return encodeURIComponent(baseMessage);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowConfirmationDialog(true);
    }
  };

  const confirmSendWhatsApp = () => {
    setShowConfirmationDialog(false);
    setIsSubmitting(true);

    const message = buildWhatsAppMessage();
    const whatsappUrl = `https://wa.me/03466758830?text=${message}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Navigate back to home after a brief delay
    setTimeout(() => {
      navigate('/cryptoflow');
    }, 1000);
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
                onClick={() => navigate('/cryptoflow/')}
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
                      className={`${errors.fullName ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}
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
                      className={`${errors.fatherName ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}
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
                      className={`${errors.whatsappNumber ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}
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
                      className={`${errors.email ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}
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
                      <SelectTrigger className={errors.currentClass ? 'border-red-500' : ''}>
                        <SelectValue placeholder="Select your current class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="11th">11th Grade</SelectItem>
                        <SelectItem value="12th">12th Grade</SelectItem>
                        <SelectItem value="1st-year">1st Year (Dropped)</SelectItem>
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
                      className={`${errors.collegeName ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}
                    />
                    {errors.collegeName && <p className="text-red-500 text-sm mt-1">{errors.collegeName}</p>}
                  </div>

                  <div>
                    <Label htmlFor="mdcatStatus" className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                      MDCAT Status *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('mdcatStatus', value)}>
                      <SelectTrigger className={errors.mdcatStatus ? 'border-red-500' : ''}>
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
                      className={`${errors.location ? 'border-red-500' : ''} text-slate-500 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}
                    />
                      {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                    </div>

                    <div>
                      <Label htmlFor="preferredStudyMode" className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                        Preferred Study Mode *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('preferredStudyMode', value)}>
                        <SelectTrigger className={errors.preferredStudyMode ? 'border-red-500' : ''}>
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
                        <SelectTrigger className={errors.province ? 'border-red-500' : ''}>
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

            {/* Submit Button */}
            <div className="text-center mt-8">
              <Button
                type="submit"
                size="lg"
                className="bg-crypto-purple hover:bg-crypto-dark-purple text-white px-8 py-4 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <MessageCircle className="ml-2 h-5 w-5" />}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmationDialog} onOpenChange={setShowConfirmationDialog}>
        <DialogContent className={`max-w-md ${theme === 'dark' ? 'bg-slate-800 border-slate-600' : 'bg-white'}`}>
          <DialogHeader className="text-center">
            <div className="mx-auto bg-crypto-purple/20 rounded-full p-3 mb-4">
              <MessageCircle className="h-8 w-8 text-crypto-purple" />
            </div>
            <DialogTitle className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Confirm Your Details
            </DialogTitle>
            <DialogDescription className={`text-center ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
              This will open WhatsApp with your registration details. Make sure all information is correct before sending.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 mt-6">
            <Button
              variant="outline"
              onClick={() => setShowConfirmationDialog(false)}
              className="flex-1"
              disabled={isSubmitting}
            >
              Review Details
            </Button>
            <Button
              onClick={confirmSendWhatsApp}
              className="flex-1 bg-crypto-purple hover:bg-crypto-dark-purple"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Opening WhatsApp...' : 'Send on WhatsApp'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Registration;
