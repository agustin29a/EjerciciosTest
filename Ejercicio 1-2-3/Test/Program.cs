//Ejercicio 1

void showEven()
{
    for (int i = 0; i < 100; i++)
    {
        if (i % 2 != 0) Console.WriteLine(i);
    }

}


//Ejercicio 2

double[] arraySalary = new double[5];

for (int i = 0; i < arraySalary.Length; i++)
{
    Console.WriteLine("Ingrese el salario numero: " + (i + 1));
    arraySalary[i] = Convert.ToDouble(Console.ReadLine());
}

Sueldo salary = new Sueldo(arraySalary);
salary.showSueldo();

class Sueldo
{
    private double[] arraySueldo = new double[5];

    public Sueldo(double[] pArraySueldo)
    {
       this.arraySueldo = pArraySueldo;
    }

    public void showSueldo()
    {
        foreach (double item in arraySueldo) Console.WriteLine(item);
    }
 
}


//Ejercicio 3

class Alumno
{
    private string nombre;
    private int edad;

    public Alumno( string p_nombre, int p_edad)
    {
        this.nombre = p_nombre;
        this.edad = p_edad;
    }

    public void mostrarDatos()
    {
        Console.WriteLine("El nombre es: " + this.nombre + "\n La edad es: " + this.edad);
    }

    public void esMayoEdad()
    {
        if (this.edad >= 18)
        {
            Console.WriteLine("Es mayor de Edad");
        }
        else
        {
            Console.WriteLine("No es mayor de edad");
        }

    }
       

}


