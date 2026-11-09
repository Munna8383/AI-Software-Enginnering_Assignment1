
const multiplyValue = (value:number,multiplier?:number):number =>{

   if(multiplier!==undefined){
    return value*multiplier
   }else{
    return value*2
   }
    
}





const processInput = (value:string|number|boolean):string|number=>{

    if(typeof value ==='string'){
        return value.trim().toLowerCase()
    }else if(typeof value==='number'){
        return value*10
    }else{
        if(value===true){
            return "Active"
        }else{
            return "Inactive"
        }
    }

}






const formatCoordinate = (coordinateAndLocation:readonly[number,number,string]):string=>{

    return `Location: ${coordinateAndLocation[2]} (${coordinateAndLocation[0]}, ${coordinateAndLocation[1]})`

}






const concatenateArrays = <T>(...arrays: T[][]):T[] =>{

const result = arrays.reduce((acc,current)=>acc.concat(current))

return result

}





interface Course {
    title:string;
    students:number;
    isPublished:boolean
}


const getPopularCourses = (courses:Course[],minStudents:number):Course[]=>{

    const publishedCourse = courses.filter((course)=>course.isPublished===true&&course.students>=minStudents)

    return publishedCourse
}





const pluckValues = <T,K extends keyof T>(items: T[],key: K):T[K][] =>{

    const result = items.map((item)=>item[key])

    return result

}





class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {

    constructor(name:string,baseSalary:number,private department: string){
        super(name,baseSalary)
    }

    getRoleInfo(){
        return `Manager of ${this.department}: ${this.name}`
    }

}




const validateAgeAsync=async(age:number):Promise<string>=>{

    return new Promise((resolve,reject)=>{
        if(age<18){
            reject(new Error("Access Denied: Must be 18 or older"))
        }else{
           setTimeout(() => {
             resolve("Access Granted")
           }, 1000);
        }
    })
    
}