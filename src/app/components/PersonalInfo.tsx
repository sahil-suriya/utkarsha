import { Mail, Phone, MapPin, Calendar, Instagram, User } from "lucide-react";

export function PersonalInfo() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Personal Information
          </h1>
          <div className="h-px w-24 bg-black mx-auto"></div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <InfoItem
              icon={<User size={20} />}
              label="Full Name"
              value="Utkarsha Katoch"
            />
            <InfoItem
              icon={<Calendar size={20} />}
              label="Date of Birth"
              value="Febuary 27, 2006"
            />
            <InfoItem
              icon={<Phone size={20} />}
              label="Contact Number"
              value="+91 62307 29770"
            />
          </div>

          <div className="space-y-8">
            <InfoItem
              icon={<Mail size={20} />}
              label="Email Address"
              value="utkarshakatochl@gmail.com"
            />
            <InfoItem
              icon={<MapPin size={20} />}
              label="Address"
              value="VPO Bhoura, Tehsil Palampur, District Kangra, Himachal Pradesh"
            />
            <InfoItem
              icon={<Instagram size={20} />}
              label="Instagram"
              value="https://www.instagram.com/utkarsha.katoch?igsh=ZTN2YTFxZG9wdTFi"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="mt-1 text-black">{icon}</div>
      <div>
        <p 
          className="text-sm uppercase tracking-wider text-gray-500 mb-1"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
        >
          {label}
        </p>
        <p 
          className="text-lg"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
