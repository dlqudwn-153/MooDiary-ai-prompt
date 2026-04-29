from datasets import load_dataset
from prompt import create_prompt
from main import call_safe_ai
import json

dataset = load_dataset("go_emotions")

emotion_labels = dataset["train"].features["labels"].feature.names

recent = "최근 스트레스 증가, 슬픔 반복"
text = "요즘 너무 지치고 아무것도 하기 싫다"

prompt = create_prompt(recent, text, emotion_labels)

result = call_safe_ai(prompt)

print(json.dumps(result, indent=2, ensure_ascii=False))