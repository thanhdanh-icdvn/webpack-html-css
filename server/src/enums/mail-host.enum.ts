/**
 * Mail port SMTP
 */
export enum MailPortSMTP{
  NoSSL=25,
  TLS = 587,
  SSL = 465,
}
/**
 * Mail port IMAP
 */
export enum MailPortIMAP{
  NoSSL=143,
  TLS = 143,
  SSL = 993,
}
/**
 * Mail host SMTP
 */
export enum MailHostSMTP{
  GMAIL='smtp.gmail.com',
  YAHOO='mail.yahoo.com',
  MICROSOFT='smtp.office365.com',
  YANDEX='smtp.yandex.com'
}