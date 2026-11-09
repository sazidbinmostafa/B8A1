// Problem: 01
const multiplyValue = (input: number, multiplier: number = 2): number => {
    return input * multiplier;
}

// Problem: 02
const processInput = (input: string | number | boolean): string | number => {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    } else if (typeof input === "number") {
        return input * 10;
    } else {
        return input ? "Active" : "Inactive";
    }
}

// Problem: 03
const formatCoordinate = (coordinate: readonly [number, number, string]): string => {

    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
};

// Problem: 04
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return ([] as T[]).concat(...arrays);
};

// Problem: 05
interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    const popularCourses = courses.filter(
        (course) =>
            course.isPublished && course.students >= minStudents
    );
    return popularCourses;
};

// Problem: 06
const pluckValues = <T, K extends keyof T>(
    items: T[],
    key: K
): T[K][] => {
    return items.map((item) => item[key]);
};

//  Problem: 07
class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

// Problem: 08
const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};

