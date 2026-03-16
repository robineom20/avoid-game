name= input("이름: ")
age= input("나이: ")
print("안녕", name)
print("너는", age, "살이구나")
if int(age) >= 20:
    print("성인 모드 활성화")
else:
    print("미성년자 모드 활성화")
import random
secret= random.randint(1, 10)
while True:
    guess= int(input("1부터 10 사이 숫자를 맞혀봐: "))
    if guess == secret:
        print("정답!")
        break
    else:
        print("오답!!! ")
import random
items= ["🟢 일반 아이템", "🔵 레어 아이템", "🟣 에픽 아이템", "🟡 전설 아이템"]
print("가챠를 시작합니다!")
result= random.choice(items)
print("결과:", result)
import random
print("가챠를 시작합니다!")
chance= random.randint(1, 100)
if chance <= 60:
    print("🟢 일반 아이템")
elif chance <= 85:
    print("🔵 레어 아이템")
elif chance <= 97:
    print("🟣 에픽 아이템")
else:
    print("🟡 전설 아이템")
import random
money= 100000
cost= 1000
legand_pity= 0
inventory= []
def pull():
    global legand_pity
    chance= random.randint(1, 100)
    #천장 시스템
    if legand_pity >=49:
        legand_pity= 0
        return "🟡전설"
    if chance <= 60:
        legand_pity += 1
        return "🟢일반"
    elif chance <= 85:
        legand_pity += 1
        return "🔵레어"
    elif chance <= 97:
        legand_pity += 1
        return "🟣에픽"
    else:
        legand_pity= 0
        return "🟡전설"
while True:
    print("\n현재 돈:", money)
    choice = input("1. 1회 뽑기 (1000원) / 2. 10연 (10000원) / 3. 종료 : ")

    if choice == "1":
        if money < cost:
            print("돈 부족 😢")
            continue
        money -= cost
        item = pull()
        inventory.append(item)
        print("결과:", item)

    elif choice == "2":
        if money < cost * 10:
            print("돈 부족 😢")
            continue
        money -= cost * 10
        print("🔥 10연 시작!")
        for i in range(10):
            item = pull()
            inventory.append(item)
            print(i+1, ":", item)

    elif choice == "3":
        print("게임 종료")
        break

    else:
        print("잘못된 입력")

print("\n최종 인벤토리:")
for item in inventory:
    print(item)

import tkinter as tk
import random
money= 10000
cost= 1000
legand_pity= 0
inventory = []
def pull():
    global legand_pity
    chance= random.randint(1, 100)
    if legand_pity >= 49:
        legand_pity= 0
        return "🟡전설"
    if chance <= 60:
        legand_pity += 1
        return "🟢일반"
    elif chance <= 85:
        legand_pity += 1
        return "🔵레어"
    elif chance <= 97:
        legand_pity += 1
        return "🟣에픽"
    else:
        legand_pity = 0
        return "🟡전설"
def single_pull():
    global money
    if money < cost:
        result_label.config(text="돈 부족")
        return
    money -= cost
    update_money()
    item = pull()
    inventory.append(item)
    inventory_listbox.insert(tk.END, item)
    result_label.config(text=f"결과: {item}")
def ten_pull():
    global money
    if money < cost * 10:
        result_label.config(text="돈 부족")
        return
    money -= cost * 10
    update_money()
    results = []
    for _ in range(10):
        item = pull()
        results.append(item)
        inventory.append(item)
        inventory_listbox.insert(tk.END, item)
    result_label.config(text="10연 결과:\n" + "\n".join(results))
def update_money():
    money_label.config(text=f"현재 돈: {money}")

#GUI 설정
try:
    root= tk.Tk()
    root.title("가챠 게임")
    root.geometry("400x500")
    money_label= tk.Label(root, text=f"현재 돈: {money}", font=("Arial", 14))
    money_label.pack(pady=10)
    single_butten= tk.Button(root, text="1회 뽑기 (1000원)", command=single_pull)
    single_butten.pack(pady=5)
    ten_butten= tk.Button(root, text="10연 뽑기 (10000원)", command=ten_pull)
    ten_butten.pack(pady=5)
    result_label= tk.Label(root, text="결과가 여기 표시됩니다.", font=("Arial", 12))
    result_label.pack(pady=20)

    inventory_title_label = tk.Label(root, text="인벤토리", font=("Arial", 12, "bold"))
    inventory_title_label.pack()
    inventory_listbox = tk.Listbox(root, width=30, height=10)
    inventory_listbox.pack(pady=8)

    root.mainloop()
except tk.TclError:
    print("GUI를 실행할 수 없는 환경입니다. 콘솔 모드만 실행했습니다.")
