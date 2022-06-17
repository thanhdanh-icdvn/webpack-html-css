import smtpTransport from "nodemailer-smtp-transport";
import nodemailer from 'nodemailer';
import { RequestHandler, Router } from "express";
import * as dotenv from "dotenv";
import path from "path";
dotenv.config({
  path : (path.resolve(__dirname,'../../.env.local'))
})

const mailRouter = Router();
export interface ISendMailReq extends Request { }
const MAILER_OPTIONS = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.MAIL_USER+'',
    pass:process.env.MAIL_APPLICATION_PASSWORD+''
  }
}

const MAIL_OPTIONS = {
  from: 'danhthanh448@gmail.com',
  to: 'danhthanh418@gmail.com',
  subject: 'Test',
  html: `
     <!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
	<!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
	<!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		@media (max-width:820px) {
			.desktop_hide table.icons-inner {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.image_block img.big,
			.row-content {
				width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
	</style>
</head>

<body style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; color: #000000; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1276/Main_image_3.png'); background-position: top center; background-repeat: no-repeat; width: 800px;" width="800">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td style="width:100%;padding-right:0px;padding-left:0px;padding-top:30px;">
																<div align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1276/logo.png" style="display: block; height: auto; border: 0; width: 111px; max-width: 100%;" width="111" alt="Alternate text" title="Alternate text"></div>
															</td>
														</tr>
													</table>
													<table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:215px;">
																<div style="font-family: sans-serif">
																	<div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 18px; color: #ffffff; line-height: 1.5; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;">
																		<p style="margin: 0; font-size: 38px; text-align: center;"><strong>THE ONLY GIFT THAT SOUNDS</strong></p>
																		<p style="margin: 0; font-size: 38px; text-align: center;"><strong style="font-family:inherit;font-family:inherit;background-color:transparent;">&nbsp;GOOD FOR DAD</strong></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="text_block" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td>
																<div style="font-family: sans-serif">
																	<div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;">
																		<p style="margin: 0; font-size: 16px; text-align: center;"><span style="font-size:26px;">20% off on all products</span></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td style="padding-bottom:30px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
																<div align="center">
																	<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="#" style="height:44px;width:170px;v-text-anchor:middle;" arcsize="10%" strokeweight="0.75pt" strokecolor="#1D1D1D" fillcolor="#000000"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="#" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#000000;border-radius:4px;width:auto;border-top:1px solid #1D1D1D;font-weight:400;border-right:1px solid #1D1D1D;border-bottom:1px solid #1D1D1D;border-left:1px solid #1D1D1D;padding-top:5px;padding-bottom:5px;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:60px;padding-right:60px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="font-size: 16px; margin: 0; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">Button</span></span></a>
																	<!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
																</div>
															</td>
														</tr>
													</table>
													<div class="spacer_block mobile_hide" style="height:55px;line-height:55px;font-size:1px;">&#8202;</div>
													<div class="spacer_block" style="height:5px;line-height:5px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; color: #000000; width: 800px;" width="800">
										<tbody>
											<tr>
												<td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td style="width:100%;padding-right:0px;padding-left:0px;">
																<div align="center" style="line-height:10px"><img class="big" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1276/Image_1_left_1.png" style="display: block; height: auto; border: 0; width: 400px; max-width: 100%;" width="400" alt="I'm an image" title="I'm an image"></div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; background-color: #1d1d1d; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td style="padding-bottom:10px;padding-left:25px;padding-right:10px;padding-top:85px;">
																<div style="font-family: Tahoma, Verdana, sans-serif">
																	<div class="txtTinyMce-wrapper" style="font-size: 12px; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
																		<p style="margin: 0; font-size: 14px; text-align: left;"><span style="font-size:20px;"><strong>FOR EVERY MOOD</strong></span></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td style="padding-bottom:20px;padding-left:25px;padding-right:10px;padding-top:10px;">
																<div style="font-family: Tahoma, Verdana, sans-serif">
																	<div class="txtTinyMce-wrapper" style="font-size: 12px; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 18px; color: #b0b0b0; line-height: 1.5;">
																		<p style="margin: 0; font-size: 14px; text-align: left;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td style="padding-bottom:50px;padding-left:25px;padding-right:10px;padding-top:10px;text-align:left;">
																<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="#" style="height:44px;width:156px;v-text-anchor:middle;" arcsize="10%" strokeweight="0.75pt" strokecolor="#FFFFFF" fill="false"><w:anchorlock/><v:textbox inset="5px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:14px"><![endif]--><a href="#" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:transparent;border-radius:4px;width:auto;border-top:1px solid #FFFFFF;font-weight:undefined;border-right:1px solid #FFFFFF;border-bottom:1px solid #FFFFFF;border-left:1px solid #FFFFFF;padding-top:5px;padding-bottom:5px;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:40px;padding-right:35px;font-size:14px;display:inline-block;letter-spacing:normal;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><span style="font-size: 14px; line-height: 28px;" data-mce-style="font-size: 14px; line-height: 28px;">SHOP NOW</span></span></span></a>
																<!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; color: #000000; width: 800px;" width="800">
										<tbody>
											<tr>
												<td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; background-color: #1d1d1d; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td style="padding-bottom:10px;padding-left:25px;padding-right:10px;padding-top:105px;">
																<div style="font-family: Tahoma, Verdana, sans-serif">
																	<div class="txtTinyMce-wrapper" style="font-size: 12px; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
																		<p style="margin: 0; font-size: 14px; text-align: left;"><span style="font-size:20px;"><strong>FOR EVERY MOOD</strong></span></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td style="padding-bottom:20px;padding-left:25px;padding-right:10px;padding-top:10px;">
																<div style="font-family: Tahoma, Verdana, sans-serif">
																	<div class="txtTinyMce-wrapper" style="font-size: 12px; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 18px; color: #b0b0b0; line-height: 1.5;">
																		<p style="margin: 0; font-size: 14px; text-align: left;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Aenean massa.</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td style="padding-bottom:50px;padding-left:25px;padding-right:10px;padding-top:10px;text-align:left;">
																<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="#" style="height:44px;width:156px;v-text-anchor:middle;" arcsize="10%" strokeweight="0.75pt" strokecolor="#FFFFFF" fill="false"><w:anchorlock/><v:textbox inset="5px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:14px"><![endif]--><a href="#" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:transparent;border-radius:4px;width:auto;border-top:1px solid #FFFFFF;font-weight:undefined;border-right:1px solid #FFFFFF;border-bottom:1px solid #FFFFFF;border-left:1px solid #FFFFFF;padding-top:5px;padding-bottom:5px;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:40px;padding-right:35px;font-size:14px;display:inline-block;letter-spacing:normal;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><span style="font-size: 14px; line-height: 28px;" data-mce-style="font-size: 14px; line-height: 28px;">SHOP NOW</span></span></span></a>
																<!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td style="width:100%;padding-right:0px;padding-left:0px;">
																<div align="center" style="line-height:10px"><img class="big" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1276/image_2.2.png" style="display: block; height: auto; border: 0; width: 400px; max-width: 100%;" width="400" alt="I'm an image" title="I'm an image"></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; color: #000000; width: 800px;" width="800">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td style="width:100%;padding-right:0px;padding-left:0px;">
																<div align="center" style="line-height:10px"><img class="big" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1276/Last_images_2.png" style="display: block; height: auto; border: 0; width: 800px; max-width: 100%;" width="800" alt="Alternate text" title="Alternate text"></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; color: #000000; width: 800px;" width="800">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; background-color: #1d1d1d; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td style="padding-left:10px;padding-right:10px;padding-top:50px;">
																<div style="font-family: sans-serif">
																	<div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;">
																		<p style="margin: 0; font-size: 38px; text-align: center;"><strong>EXTRA 10% OFF</strong></p>
																		<p style="margin: 0; font-size: 38px; text-align: center;"><span style="font-size:22px;">Member only</span></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td style="padding-bottom:20px;padding-left:60px;padding-right:60px;padding-top:35px;">
																<div style="font-family: Tahoma, Verdana, sans-serif">
																	<div class="txtTinyMce-wrapper" style="font-size: 12px; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 18px; color: #b0b0b0; line-height: 1.5;">
																		<p style="margin: 0; font-size: 14px; text-align: center;">&nbsp;Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.&nbsp;</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td style="width:100%;padding-right:0px;padding-left:0px;padding-top:25px;">
																<div align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1276/logo.png" style="display: block; height: auto; border: 0; width: 111px; max-width: 100%;" width="111" alt="Alternate text" title="Alternate text"></div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1d1d1d; color: #000000; width: 800px;" width="800">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="social_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td style="text-align:center;padding-right:0px;padding-left:0px;padding-top:20px;">
																<table class="social-table" width="188px" border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	<tr>
																		<td style="padding:0 15px 0 0px;"><a href="https://www.facebook.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-default-gray/facebook@2x.png" width="32" height="32" alt="Facebook" title="Facebook" style="display: block; height: auto; border: 0;"></a></td>
																		<td style="padding:0 15px 0 0px;"><a href="https://twitter.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-default-gray/twitter@2x.png" width="32" height="32" alt="Twitter" title="Twitter" style="display: block; height: auto; border: 0;"></a></td>
																		<td style="padding:0 15px 0 0px;"><a href="https://plus.google.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-default-gray/googleplus@2x.png" width="32" height="32" alt="Google+" title="Google+" style="display: block; height: auto; border: 0;"></a></td>
																		<td style="padding:0 15px 0 0px;"><a href="https://instagram.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-default-gray/instagram@2x.png" width="32" height="32" alt="Instagram" title="Instagram" style="display: block; height: auto; border: 0;"></a></td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
													<table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td style="padding-bottom:25px;padding-left:10px;padding-right:10px;padding-top:10px;">
																<div style="font-family: sans-serif">
																	<div class="txtTinyMce-wrapper" style="font-size: 12px; text-align: center; mso-line-height-alt: 14.399999999999999px; color: #C0C0C0; line-height: 1.2; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;">Copyright © 2020 Your Company</div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; color: #000000; width: 800px;" width="800">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<div class="spacer_block" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 800px;" width="800">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="icons_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
																<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	<tr>
																		<td style="vertical-align: middle; text-align: center;">
																			<!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																			<!--[if !vml]><!-->
																			<table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation">
																				<!--<![endif]-->
																				<tr>
																					<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/" target="_blank" style="text-decoration: none;"><img class="icon" alt="Designed with BEE" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/53601_510656/Signature/bee.png" height="32" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
																					<td style="font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/" target="_blank" style="color: #9d9d9d; text-decoration: none;">Designed with BEE</a></td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>
     `
}


const sendMail: RequestHandler = (req: any, res: any) => {
  const transporter = nodemailer.createTransport(smtpTransport(MAILER_OPTIONS));
  transporter.sendMail(MAIL_OPTIONS, (error, info) => {
    if (error) {
      res.status(500).json({
        code: 500,
        message: error
      })
    } else {
      res.status(200).json({
        messsage: "Sent mail success",
        infor: info,
        mailContent: MAIL_OPTIONS
      })
    }
  })
}
mailRouter.route('/').get(
  sendMail
);
export default mailRouter;