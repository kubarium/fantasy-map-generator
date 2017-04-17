import numpy as np
import random

dimension = 16

export = np.full([dimension,dimension],0)

source = np.random.rand(dimension,dimension)

start_interval = 2
start_index = int(dimension /4 * start_interval)

def horizontal():
    global start_index
    for i in range(0,len(source)):
        if i == 0:
            export[i][start_index] = 1
            continue

        sorted_values = sorted([(start_index-1, source[i][start_index-1]), (start_index, source[i][start_index]), (start_index+1, source[i][start_index+1])], key=lambda tup: tup[1])

        #the middle value (1) and 0th index always gives the median index and the next start index to trickle down
        start_index = sorted_values[1][0]
        export[i][start_index] = 1

        if i == len(source) - 1 :



horizontal()
print(export)

'''

print(export)
print(source)
print(source[15][8])
'''
