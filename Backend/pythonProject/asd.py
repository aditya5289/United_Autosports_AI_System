import pandas as pd
import numpy as np
# Function to simulate the data for one lap of 8 km
def simulate_tire_data(num_laps=1):
    data = []
    for lap in range(1, num_laps + 1):
        for km in range(1, 9):
            # Simulating data
            speed = np.random.uniform(180, 320)  # Speed in km/h
            temp = np.random.uniform(85, 105)  # Temperature in Celsius
            pressure = np.random.uniform(21, 23)  # Pressure in PSI
            turning_radius = np.random.uniform(30, 50)  # Turning radius in meters
            # Damage percentage calculation
            front_left_damage = np.random.uniform(0, 100)
            front_right_damage = np.random.uniform(0, 100)
            rear_left_damage = np.random.uniform(0, 100)
            rear_right_damage = np.random.uniform(0, 100)
            # Determine if tire needs to be changed
            front_left_change = 1 if front_left_damage > 75 else 0
            front_right_change = 1 if front_right_damage > 75 else 0
            rear_left_change = 1 if rear_left_damage > 75 else 0
            rear_right_change = 1 if rear_right_damage > 75 else 0
            data.append([lap, km, speed, temp, pressure, turning_radius,
                         front_left_damage, front_right_damage, rear_left_damage, rear_right_damage,
                         front_left_change, front_right_change, rear_left_change, rear_right_change])
    columns = ['Lap', 'Distance_km', 'Speed_kmh', 'Temperature_C', 'Pressure_PSI', 'Turning_Radius_m',
               'Front_Left_Damage_%', 'Front_Right_Damage_%', 'Rear_Left_Damage_%', 'Rear_Right_Damage_%',
               'Front_Left_Change', 'Front_Right_Change', 'Rear_Left_Change', 'Rear_Right_Change']
    return pd.DataFrame(data, columns=columns)
# Generate data for 1000 laps
df = simulate_tire_data(num_laps=1000)
# Save to CSV
df.to_csv('f1_tire_data.csv', index=False)
# Print the first few rows to verify
print(df.head())