import requests

def call_safe_ai(prompt):
    url = "YOUR_REAL_ENDPOINT" # 여기에 saife x enpoint

    headers = {
        "Authorization": "Bearer YOUR_API_KEY", # 여기에 saife x api key
        "Content-Type": "application/json"
    }

    data = {
        "prompt": prompt
    }

    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        return response.json()

    except requests.exceptions.RequestException as e:
        return {"error": str(e)}