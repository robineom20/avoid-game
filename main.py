import tkinter as tk
import random

money = 1000000
cost = 1000
legend_pity = 0
inventory = []


def pull():
    global legend_pity
    chance = random.randint(1, 100)

    # 49번 연속 전설이 안 나오면 다음 뽑기에서 전설 확정
    if legend_pity >= 49:
        legend_pity = 0
        return "🟡전설"

    if chance <= 60:
        legend_pity += 1
        return "🟢일반"
    if chance <= 85:
        legend_pity += 1
        return "🔵레어"
    if chance <= 97:
        legend_pity += 1
        return "🟣에픽"

    legend_pity = 0
    return "🟡전설"


def single_pull():
    global money
    if money < cost:
        result_label.config(text="돈 부족 😢")
        return

    money -= cost
    update_money()

    item = pull()
    inventory.append(item)
    result_label.config(text=f"결과: {item}")


def ten_pull():
    global money
    if money < cost * 10:
        result_label.config(text="돈 부족 😢")
        return

    money -= cost * 10
    update_money()
    results = []

    for _ in range(10):
        item = pull()
        inventory.append(item)
        results.append(item)

    result_label.config(text="10연 결과:\n" + "\n".join(results))


def update_money():
    money_label.config(text=f"현재 돈: {money}")


def update_inventory():
    inventory_text.delete("1.0", tk.END)
    if not inventory:
        inventory_text.insert(tk.END, "아직 획득한 아이템이 없습니다.")
        return
    inventory_text.insert(tk.END, "\n".join(inventory))


# GUI 설정
root = tk.Tk()
root.title("가챠 게임")
root.geometry("400x500")

money_label = tk.Label(root, text=f"현재 돈: {money}", font=("Arial", 14))
money_label.pack(pady=10)

single_button = tk.Button(root, text="1회 뽑기 (1000원)", command=single_pull)
single_button.pack(pady=5)

ten_button = tk.Button(root, text="10연 뽑기 (10000원)", command=ten_pull)
ten_button.pack(pady=5)

result_label = tk.Label(root, text="결과가 여기에 표시됩니다.", font=("Arial", 12))
result_label.pack(pady=20)

inventory_title = tk.Label(root, text="인벤토리", font=("Arial", 12, "bold"))
inventory_title.pack()

inventory_text = tk.Text(root, height=10, width=32)
inventory_text.pack(pady=8)
update_inventory()


def wrapped_single_pull():
    single_pull()
    update_inventory()


def wrapped_ten_pull():
    ten_pull()
    update_inventory()


single_button.config(command=wrapped_single_pull)
ten_button.config(command=wrapped_ten_pull)

root.mainloop()
