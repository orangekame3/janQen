def convObject(i):
    if i == 0:
        return "グー"
    if i == 1:
        return "チョキ"
    else:
        return "パー"


def judge(i, j):
    p = (i - j + 3) % 3
    if p == 0:
        return "引き分け"
    elif p == 1:
        return "あなたの負け"
    else:
        return "あなたの勝ち"
