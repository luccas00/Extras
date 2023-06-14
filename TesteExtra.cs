using System;
using System.IO;

namespace Principal
{

    public class TesteExtra
    {

        public static void Main(String[] args)
        {
            Console.WriteLine("Inicio do Main");

            string[] allDirectories = Directory.GetDirectories(@"C:\", "*");

            Console.WriteLine(allDirectories.Length);

            Console.WriteLine("Fim do Main");
        }

    }

}