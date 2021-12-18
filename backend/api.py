from flask import Blueprint, jsonify, request
from flask_restful import Api, Resource
from qiskit import QuantumRegister, ClassicalRegister, QuantumCircuit, execute, IBMQ
from model import cleanfig, convObject, generatefig, judge, mapping_list
import os
import datetime

TOKEN = os.environ["TOKEN"]
IBMQ.enable_account(TOKEN)
provider = IBMQ.get_provider(hub="ibm-q")
num_q = 4
device = "ibmq_qasm_simulator"
backend = provider.get_backend(device)
q = QuantumRegister(num_q, "q")
c = ClassicalRegister(num_q, "c")
# post時に量子乱数を生成、ゲームの勝敗をレスポンスするapi(POSTメソッド)
quantum_random_generator_bp = Blueprint(
    "quantum_random_generator", __name__, url_prefix="/api/post"
)

class QuantumRandomGenerator(Resource):
    def post(self):

        cleanfig()
        now = datetime.datetime.now()
        new = "static/tmp/{0:%Y%m%d_%H%M%S}.png".format(now)
        input_data = request.json

        circuit = QuantumCircuit(q, c)
        circuit.h(q)
        circuit.measure(q, c)

        while True:
            job = execute(circuit, backend, shots=100)
            print("Executing Job...\n")

            counts = job.result().get_counts()

            print("RESULT: ", counts, "\n")

            rand = int(counts.most_frequent(), 2)
            output_num = rand % 3
            if  rand not in mapping_list(num_q):
                continue

            input_num = input_data["input"]
            input = convObject(input_num)
            output = convObject(output_num)
            result = judge(input_num, output_num)
            generatefig(counts, new)
            result_data = {
                "input": input,
                "output": output,
                "result": result,
                "output_num": output_num,
                "fig": new,
            }
            break
        return jsonify(result_data)
    




quanturm_random_generator = Api(quantum_random_generator_bp)
quanturm_random_generator.add_resource(QuantumRandomGenerator, "")
