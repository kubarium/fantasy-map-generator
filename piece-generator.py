import numpy as np

dimension = 16

export = np.full([dimension,dimension],0)

source = np.random.rand(dimension,dimension)

start_interval = 1
start_index = int(dimension /4 * start_interval)

def horizontal():
    global start_index
    for i in range(0,len(source)):
        if i == 0:
            export[i][start_index] = 1
            continue

        if i == len(source) - 1 :
            if start_index in (0,1):
                start_index = 0
            if start_index in (2,6,10,14,15):
                start_index = 15
            if start_index in (3,4,5):
                start_index = 4
            if start_index in (7,8,9):
                start_index = 8
            if start_index in (11,12,13):
                start_index = 12
            
            export[i][start_index] = 1
            continue

        sorted_values = sorted([(start_index-1, source[i][start_index-1]), (start_index, source[i][start_index]), (start_index+1, source[i][start_index+1])], key=lambda tup: tup[1])

        #the middle value (1) and 0th index always gives the median index and the next start index to trickle down
        start_index = sorted_values[1][0]
        export[i][start_index] = 1

horizontal()
print(export)

'''

print(export)
print(source)
print(source[15][8])
'''
