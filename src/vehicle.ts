interface Vehicle {
    name : string;
    type : string; 
    speed : number;
}

// Không được khai báo trực tiếp enum trong Interface
// Định nghĩa trước
enum fuelType {
    Xang,
    Dien
}


interface MotorizedVehicle extends Vehicle{
    fuelType : fuelType;
}

function calculateTravelTime(vehicle: Vehicle, distance: number): number {
  return distance / vehicle.speed;
}

const vehic : MotorizedVehicle[] = [
    {name: "Wave", type: "Xe máy", speed: 50, fuelType : fuelType.Xang },
    {name: "Car", type: "Ô tô", speed: 150, fuelType : fuelType.Dien },
]

const distance = 100;
for (const v of vehic) {
    const time = calculateTravelTime(v, distance);
    console.log(time);
  }

