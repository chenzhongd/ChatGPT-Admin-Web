/**
 * Elastice Email sender
 */
const apiKey = process.env.ELASTICE_EMAIL_API_KEY!;
const senderEmail = process.env.ELASTICE_EMAIL_SENDER!;

export default async function sendEmail(to: string, code: string | number) {
  const params = {
    apikey: apiKey,
    from: senderEmail,
    to: to,
    subject: "【AI创客工坊】ChatGPT验证码",
    bodyHtml: `欢迎关注微信公众号【AI创客工坊】获取免费账号/使用攻略<br>您的验证码是：${code}`,
  };

  const formData = new FormData();
  for (const key in params) {
    // @ts-ignore
    formData.append(key, params[key]);
  }

  const response = await fetch("https://api.elasticemail.com/v2/email/send", {
    method: "POST",
    body: formData,
  });

  return response.ok;
}
