import { describe, it, expect, beforeEach } from "vitest";
import { Avion } from "../src/Avion";
import { ColeccionDeAviones } from "../src/ColeccionDeAviones";

// 100 aviones históricos reales
const avionesHistoricos: Avion[] = [
  new Avion("Wright Flyer",               "EE.UU.",        1903, "pistón"),
  new Avion("Bleriot XI",                 "Francia",       1909, "pistón"),
  new Avion("Fokker Dr.I",                "Alemania",      1917, "pistón"),
  new Avion("SPAD XIII",                  "Francia",       1917, "pistón"),
  new Avion("Sopwith Camel",              "Reino Unido",   1917, "pistón"),
  new Avion("Junkers F 13",               "Alemania",      1919, "pistón"),
  new Avion("Ford Trimotor",              "EE.UU.",        1926, "pistón"),
  new Avion("Spirit of St. Louis",        "EE.UU.",        1927, "pistón"),
  new Avion("Dornier Do X",               "Alemania",      1929, "pistón"),
  new Avion("Supermarine S.6B",           "Reino Unido",   1931, "pistón"),
  new Avion("Douglas DC-3",               "EE.UU.",        1935, "pistón"),
  new Avion("Hawker Hurricane",           "Reino Unido",   1935, "pistón"),
  new Avion("Messerschmitt Bf 109",       "Alemania",      1935, "pistón"),
  new Avion("Heinkel He 111",             "Alemania",      1935, "pistón"),
  new Avion("Supermarine Spitfire",       "Reino Unido",   1936, "pistón"),
  new Avion("Mitsubishi A6M Zero",        "Japón",         1939, "pistón"),
  new Avion("Boeing B-17 Flying Fortress","EE.UU.",        1938, "pistón"),
  new Avion("Consolidated B-24 Liberator","EE.UU.",        1939, "pistón"),
  new Avion("Focke-Wulf Fw 190",          "Alemania",      1939, "pistón"),
  new Avion("Avro Lancaster",             "Reino Unido",   1941, "pistón"),
  new Avion("P-51 Mustang",               "EE.UU.",        1940, "pistón"),
  new Avion("Grumman F6F Hellcat",        "EE.UU.",        1942, "pistón"),
  new Avion("de Havilland Mosquito",      "Reino Unido",   1941, "pistón"),
  new Avion("Vought F4U Corsair",         "EE.UU.",        1940, "pistón"),
  new Avion("Boeing B-29 Superfortress",  "EE.UU.",        1942, "pistón"),
  new Avion("Messerschmitt Me 262",       "Alemania",      1942, "jet"),
  new Avion("Gloster Meteor",             "Reino Unido",   1943, "jet"),
  new Avion("Heinkel He 178",             "Alemania",      1939, "jet"),
  new Avion("Bell P-59 Airacomet",        "EE.UU.",        1942, "jet"),
  new Avion("Lockheed P-80 Shooting Star","EE.UU.",        1944, "jet"),
  new Avion("de Havilland Vampire",       "Reino Unido",   1945, "jet"),
  new Avion("MiG-15",                     "URSS",          1947, "jet"),
  new Avion("F-86 Sabre",                 "EE.UU.",        1947, "jet"),
  new Avion("B-47 Stratojet",             "EE.UU.",        1947, "jet"),
  new Avion("English Electric Canberra",  "Reino Unido",   1949, "jet"),
  new Avion("de Havilland Comet",         "Reino Unido",   1949, "jet"),
  new Avion("Boeing B-52 Stratofortress", "EE.UU.",        1952, "jet"),
  new Avion("F-100 Super Sabre",          "EE.UU.",        1953, "jet"),
  new Avion("MiG-19",                     "URSS",          1952, "jet"),
  new Avion("Lockheed U-2",               "EE.UU.",        1955, "jet"),
  new Avion("F-104 Starfighter",          "EE.UU.",        1954, "jet"),
  new Avion("MiG-21",                     "URSS",          1955, "jet"),
  new Avion("Boeing 707",                 "EE.UU.",        1957, "jet"),
  new Avion("Dassault Mirage III",        "Francia",       1956, "jet"),
  new Avion("F-4 Phantom II",             "EE.UU.",        1958, "jet"),
  new Avion("A-10 Thunderbolt II",        "EE.UU.",        1972, "jet"),
  new Avion("Lockheed SR-71 Blackbird",   "EE.UU.",        1964, "jet"),
  new Avion("Tupolev Tu-144",             "URSS",          1968, "jet"),
  new Avion("Concorde",                   "Francia/R.U.",  1969, "jet"),
  new Avion("F-14 Tomcat",                "EE.UU.",        1970, "jet"),
  new Avion("F-15 Eagle",                 "EE.UU.",        1972, "jet"),
  new Avion("F-16 Fighting Falcon",       "EE.UU.",        1974, "jet"),
  new Avion("MiG-29",                     "URSS",          1977, "jet"),
  new Avion("Su-27",                      "URSS",          1977, "jet"),
  new Avion("Boeing 747",                 "EE.UU.",        1968, "jet"),
  new Avion("Airbus A300",                "Europa",        1972, "jet"),
  new Avion("Panavia Tornado",            "Europa",        1974, "jet"),
  new Avion("Dassault Mirage 2000",       "Francia",       1978, "jet"),
  new Avion("B-2 Spirit",                 "EE.UU.",        1989, "jet"),
  new Avion("F-117 Nighthawk",            "EE.UU.",        1981, "jet"),
  new Avion("Eurofighter Typhoon",        "Europa",        1994, "jet"),
  new Avion("Dassault Rafale",            "Francia",       1986, "jet"),
  new Avion("Su-57",                      "Rusia",         2010, "jet"),
  new Avion("F-22 Raptor",                "EE.UU.",        1997, "jet"),
  new Avion("F-35 Lightning II",          "EE.UU.",        2006, "jet"),
  new Avion("Airbus A380",                "Europa",        2005, "jet"),
  new Avion("Boeing 787 Dreamliner",      "EE.UU.",        2009, "jet"),
  new Avion("Chengdu J-20",               "China",         2011, "jet"),
  new Avion("Antonov An-225 Mriya",       "Ucrania",       1988, "jet"),
  new Avion("Lockheed C-130 Hercules",    "EE.UU.",        1954, "turbohélice"),
  new Avion("Tupolev Tu-95",              "URSS",          1952, "turbohélice"),
  new Avion("Vickers Viscount",           "Reino Unido",   1948, "turbohélice"),
  new Avion("Bristol Britannia",          "Reino Unido",   1952, "turbohélice"),
  new Avion("Fokker F27 Friendship",      "Países Bajos",  1955, "turbohélice"),
  new Avion("Antonov An-12",              "URSS",          1957, "turbohélice"),
  new Avion("Fokker F50",                 "Países Bajos",  1985, "turbohélice"),
  new Avion("ATR 72",                     "Europa",        1988, "turbohélice"),
  new Avion("Dash 8 Q400",                "Canadá",        1983, "turbohélice"),
  new Avion("Saab 340",                   "Suecia",        1983, "turbohélice"),
  new Avion("Ilyushin Il-18",             "URSS",          1957, "turbohélice"),
  new Avion("Antonov An-22",              "URSS",          1965, "turbohélice"),
  new Avion("Britten-Norman Islander",    "Reino Unido",   1965, "pistón"),
  new Avion("Cessna 172 Skyhawk",         "EE.UU.",        1955, "pistón"),
  new Avion("Piper PA-28 Cherokee",       "EE.UU.",        1960, "pistón"),
  new Avion("Beechcraft Bonanza",         "EE.UU.",        1945, "pistón"),
  new Avion("Mooney M20",                 "EE.UU.",        1953, "pistón"),
  new Avion("Cirrus SR22",                "EE.UU.",        2001, "pistón"),
  new Avion("Diamond DA40",               "Austria",       2000, "pistón"),
  new Avion("North American T-6 Texan",   "EE.UU.",        1935, "pistón"),
  new Avion("de Havilland Tiger Moth",    "Reino Unido",   1931, "pistón"),
  new Avion("Bucker Jungmann",            "Alemania",      1934, "pistón"),
  new Avion("Nieuport 17",                "Francia",       1916, "pistón"),
  new Avion("Albatros D.III",             "Alemania",      1916, "pistón"),
  new Avion("Royal Aircraft Factory SE.5","Reino Unido",   1916, "pistón"),
  new Avion("Boeing P-26 Peashooter",     "EE.UU.",        1932, "pistón"),
  new Avion("Curtiss P-40 Warhawk",       "EE.UU.",        1938, "pistón"),
  new Avion("Republic P-47 Thunderbolt",  "EE.UU.",        1941, "pistón"),
  new Avion("North American B-25 Mitchell","EE.UU.",       1940, "pistón"),
  new Avion("Ilyushin Il-2 Sturmovik",    "URSS",          1939, "pistón"),
  new Avion("Kawasaki Ki-61 Hien",        "Japón",         1942, "pistón"),
];

describe("ColeccionDeAviones", () => {
  let coleccion: ColeccionDeAviones;

  beforeEach(() => {
    coleccion = new ColeccionDeAviones();
    avionesHistoricos.forEach((avion) => coleccion.agregar(avion));
  });

  it("debe contener exactamente 100 aviones", () => {
    expect(coleccion.cantidad()).toBe(100);
  });

  it("cada elemento de la colección debe ser una instancia de Avion", () => {
    coleccion.obtenerTodos().forEach((avion) => {
      expect(avion).toBeInstanceOf(Avion);
    });
  });

  it("la colección debe tener 100 instancias de Avion (verificación individual)", () => {
    const todos = coleccion.obtenerTodos();
    expect(todos).toHaveLength(100);
    todos.forEach((avion, i) => {
      expect(avion, `El elemento ${i} no es Avion`).toBeInstanceOf(Avion);
    });
  });

  it("cada avión debe tener nombre, país y año definidos", () => {
    coleccion.obtenerTodos().forEach((avion) => {
      expect(avion.nombre).toBeTruthy();
      expect(avion.pais).toBeTruthy();
      expect(avion.anioIntroduccion).toBeGreaterThan(1900);
    });
  });
});
