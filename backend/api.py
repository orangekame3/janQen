from flask import Blueprint, jsonify, request, session
from flask_restful import Api, Resource
import json
import os
from qiskit import QuantumRegister, ClassicalRegister, QuantumCircuit, execute, IBMQ
from qiskit.tools.monitor import job_monitor
from model import convObject, judge
from qiskit.visualization import plot_histogram
import matplotlib.pyplot as plt

TOKEN = os.environ["TOKEN"]
IBMQ.enable_account(TOKEN)
provider = IBMQ.get_provider(hub="ibm-q")

# postされたテキストをカウントするapi(POSTメソッド)
text_count_bp = Blueprint("text_count", __name__, url_prefix="/api/post")


class TextCount(Resource):
    def post(self):

        input_data = request.json
        n  = 3 
        device = "ibmq_qasm_simulator"
        # device = "ibmq_lima"
        backend = provider.get_backend(device)
        # backend = device
        if device == "ibmq_qasm_simulator":
            num_q = 4
        else:
            num_q = 5

        q = QuantumRegister(num_q, "q")
        c = ClassicalRegister(num_q, "c")

        circuit = QuantumCircuit(q, c)
        circuit.h(q)  # Applies hadamard gate to all qubits
        circuit.measure(q, c)  # Measures all qubits
        while True:
            job = execute(circuit, backend, shots=1024)

            print("Executing Job...\n")
            job_monitor(job)
            counts = job.result().get_counts()

            print("RESULT: ", counts, "\n")
            print("Press any key to close")

            rand = int(counts.most_frequent(), 2)
            output_num = rand % n
            if (rand-output_num+n)>(2**num_q):
                continue
            input_num = input_data["input"]
            input = convObject(input_num)
            output = convObject(output_num)
            result = judge(input_num, output_num)
            plt.rcParams['figure.subplot.bottom'] = 0.15
            plot_histogram(counts, color='midnightblue', title="janQen Result").savefig('dist/static/out.png')
            result_data = {
                "input": input,
                "output": output,
                "result": result,
                "output_num": output_num,
                "fig": 'static/out.png'
            }
            break
        return jsonify(result_data)


text_count = Api(text_count_bp)
text_count.add_resource(TextCount, "")
