import requests

def handler(pd: "pipedream"):
  token = f'{pd.inputs["snapchat_marketing"]["$auth"]["oauth_access_token"]}'
  authorization = f'Bearer {token}'
  headers = {"Authorization": authorization}
  r = requests.get('https://adsapi.snapchat.com/v1/me', headers=headers)
  # Export the data for use in future steps
  return r.json()
