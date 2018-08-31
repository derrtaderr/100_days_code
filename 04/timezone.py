import pendulum
import pytz

def create_list():
    tz_list = []
    for tz in pytz.all_timezones:
        tz_list.append(tz)
    return tz_list

def print_timezones(tz_list):
    for tz in tz_list:
        print(tz + "  = {}".format(pendulum.now(tz).to_datetime_string()))

if __name__ == "__main__":
    print_timezones(create_list())