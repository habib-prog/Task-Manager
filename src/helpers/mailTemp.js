// helpers/emailTemplate.js
const otpTemplate = (otp) => {
  return `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
        <div style="background-color: #4A90E2; padding: 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Task Manager</h1>
        </div>
        <div style="padding: 30px; background-color: #ffffff; text-align: center;">
          <h2 style="color: #333333;">Verify Your Email</h2>
          <p style="color: #666666; font-size: 16px;">Welcome! Use the OTP code below to complete your registration. This code is valid for 10 minutes.</p>
          <div style="margin: 30px 0;">
            <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4A90E2; background-color: #f0f7ff; padding: 10px 20px; border-radius: 5px; border: 1px dashed #4A90E2;">
              ${otp}
            </span>
          </div>
          <p style="color: #999999; font-size: 12px;">If you didn't request this, you can safely ignore this email.</p>
        </div>
        <div style="background-color: #f9f9f9; padding: 15px; text-align: center; border-top: 1px solid #e0e0e0;">
          <p style="color: #999999; margin: 0; font-size: 12px;">&copy; 2026 Task Manager Inc. All rights reserved.</p>
        </div>
      </div>
    `;
};

module.exports = { otpTemplate };
