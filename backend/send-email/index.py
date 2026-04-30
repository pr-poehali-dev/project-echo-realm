import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки на пробное занятие на почту клуба Л СПОРТ"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    program = body.get('program', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    smtp_password = os.environ['SMTP_PASSWORD']
    from_email = 'Lsport72@yandex.ru'
    to_email = 'Lsport72@yandex.ru'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = 'Новая заявка на пробное занятие — Л СПОРТ'
    msg['From'] = from_email
    msg['To'] = to_email

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 24px; background: #fff8f5; border-radius: 12px;">
      <h2 style="color: #f97316; margin-bottom: 24px;">Новая заявка на пробное занятие</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; color: #888; width: 140px;">Имя:</td>
          <td style="padding: 10px 0; font-weight: bold; color: #1a1a1a;">{name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #888;">Телефон:</td>
          <td style="padding: 10px 0; font-weight: bold; color: #1a1a1a;">{phone}</td>
        </tr>
        {"<tr><td style='padding: 10px 0; color: #888;'>Программа:</td><td style='padding: 10px 0; font-weight: bold; color: #1a1a1a;'>" + program + "</td></tr>" if program else ""}
      </table>
      <p style="margin-top: 24px; color: #888; font-size: 13px;">Заявка с сайта lsport72.ru</p>
    </div>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(from_email, smtp_password)
        server.sendmail(from_email, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }
