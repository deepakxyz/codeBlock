import logging

'''
Logging level
# DEBUG : Detailed information, typically of interest only when diagnosing problems.
# INFO : Confirmation that things are working as expected.
# WARNING : An indication that something unexpected happened, or indicative of some problem in the near future 
            (e.g. ‘disk space low’). The software is still working as expected.
# ERROR : Due to a more serious problem, the software has not been able to perform some function.
# CRITICAL : A serious error, indicating that the program itself may be unable to continue running.
'''

# configure logging
logging.basicConfig(filename="test.log", level=logging.DEBUG,
                    format='%(asctime)s:%(levelname)s:%(message)s')


def add(x, y):
    return x + y


def sub(x, y):
    return x - y


def multiply(x, y):
    return x * y


def divide(x, y):
    return x / y


num_1 = 10
num_2 = 5

add_result = add(num_1, num_2)

sub_result = sub(num_1, num_2)

mult_result = multiply(num_1, num_2)

divide_result = divide(num_1, num_2)

logging.debug(add_result)
