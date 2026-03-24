// Quick test to verify Cloudinary credentials work
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME || 'dcidlapoi',
  api_key: process.env.CLOUDINARY_KEY || '553848194699333',
  api_secret: process.env.CLOUDINARY_SECRET || 'FRocemMce3VVcevxSh_3iXanFI8',
});

console.log('Testing Cloudinary connection...');
console.log('Cloud name:', cloudinary.config().cloud_name);

cloudinary.api.ping()
  .then((result) => {
    console.log('✅ Cloudinary connection successful!', result);
  })
  .catch((err) => {
    console.error('❌ Cloudinary connection FAILED:', err.message || err);
  });
