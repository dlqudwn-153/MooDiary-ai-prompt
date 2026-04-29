import requests
from prompt import create_prompt

def call_safe_ai(prompt):
    url = "API_URL"
    
    headers = {
        "Authorization": "Bearer API_KEY",
        "Content-Type": "application/json"
    }

    data = {
        "prompt": prompt
    }

    response = requests.post(url, headers=headers, json=data)
    return response.json()


# 테스트
recent = "최근 스트레스 증가, 슬픔 반복"
text = "요즘 너무 지치고 아무것도 하기 싫다"

prompt = create_prompt(recent, text)
result = call_safe_ai(prompt)

print(result)