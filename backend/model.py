import os
import glob
from qiskit.visualization import plot_histogram
import matplotlib.pyplot as plt


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

def mapping_list(num_q):
    if (2**num_q-1)%3==0:
        lst = list(range(0,2**num_q-1))
        return lst 
    if (2**num_q-1)%3==1:
        lst = list(range(0,2**num_q-2))
        return lst 


def cleanfig():
    file_names = glob.glob("dist/static/tmp/*.png")
    for file_name in file_names:
        os.remove(file_name)
        
def generatefig(counts,date):
    plt.rcParams['figure.subplot.bottom'] = 0.15
    plot_histogram(counts, color='#BB2528', title="janQen Result").savefig("dist/"+date)
