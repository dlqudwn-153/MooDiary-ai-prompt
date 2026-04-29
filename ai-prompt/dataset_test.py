print("시작")

from datasets import load_dataset

dataset = load_dataset("go_emotions")

print("데이터 불러옴")

for i in range(5):
    print(dataset["train"][i])