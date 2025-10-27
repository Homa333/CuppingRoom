import Map from '@/components/Map';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import { useTheme } from '@/components/ThemeProvider';
import { siteInfo } from '@/src/content';

export default function Contact() {
  const { theme } = useTheme();
  return (
    <div className="container grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
      {/* LEFT — CONTACT DETAILS */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <p className="text-neutral-700 max-w-md">
          Have questions about our barista training, coffee beans, or plantation tours? Reach us
          through your preferred channel, we’d love to hear from you.
        </p>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem', // reduced icon spacing
            flexWrap: 'wrap',
            mt: 2, // less top margin
          }}
        >
          {/* CALL */}
          <a
            href={`tel:${siteInfo.phone}`}
            className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
          >
            <CallIcon
              sx={{
                fontSize: 40,
                color: '#3c2722',
                backgroundColor: '#ead4b5',
                borderRadius: '50%',
                padding: '8px',
              }}
            />
            <span className="font-medium text-neutral-800">Call Us</span>
          </a>

          {/* WHATSAPP */}
          <a
            href={siteInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
          >
            <WhatsAppIcon
              sx={{
                fontSize: 40,
                color: '#3c2722',
                backgroundColor: '#ead4b5',
                borderRadius: '50%',
                padding: '8px',
              }}
            />
            <span className="font-medium text-neutral-800">WhatsApp</span>
          </a>

          {/* EMAIL */}
          <a
            href={`mailto:${siteInfo.email}`}
            className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
          >
            <EmailIcon
              sx={{
                fontSize: 40,
                color: '#3c2722',
                backgroundColor: '#ead4b5',
                borderRadius: '50%',
                padding: '8px',
              }}
            />
            <span className="font-medium text-neutral-800">Email</span>
          </a>
        </Box>
      </div>

      {/* RIGHT — MAP */}
      <div className="w-full h-[350px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
        <Map />
      </div>
    </div>
  );
}
