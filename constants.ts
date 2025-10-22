// Fix: Define application constants.
import { Level, Opponent } from './types';

export const LEVELS: Level[] = [
  {
    level: 1,
    title: 'Fila de Inicio (ASDF y JKLÑ)',
    challenges: ['asdf', 'asdf', 'fads', 'asdf', 'jklñ', 'jklñ', 'ñlkj', 'jklñ', 'asdf jklñ', 'fads ñlkj', 'asdfasdf', 'jklñjklñ'],
    pointsPerCharacter: 5,
    pointsToUnlock: 0,
    color: 'bg-green-500',
  },
  {
    level: 2,
    title: 'Fila Superior (QWER y UIOP)',
    challenges: ['qwer', 'uiop', 'qwer uiop', 'trew', 'poiu', 'qwert', 'uiopñ', 'pepe', 'agua', 'esto', 'que'],
    pointsPerCharacter: 6,
    pointsToUnlock: 500,
    color: 'bg-blue-500',
  },
  {
    level: 3,
    title: 'Fila Inferior (ZXCV y BNM)',
    challenges: ['zxcv', 'bnm,', 'zxcv bnm,', 'vcxz', ',mnb', 'zxcvb', 'bnm,.', 'caza', 'banco', 'mano'],
    pointsPerCharacter: 7,
    pointsToUnlock: 1500,
    color: 'bg-yellow-500',
  },
  {
    level: 4,
    title: 'Práctica de Palabras',
    challenges: ['hola mundo', 'juego de teclado', 'practica hace al maestro', 'velocidad y precision', 'aprender es divertido'],
    pointsPerCharacter: 9,
    pointsToUnlock: 3000,
    color: 'bg-purple-500',
  },
  {
    level: 5,
    title: 'Maestro del Teclado',
    challenges: [
      'El rápido zorro marrón salta sobre el perro perezoso.',
      'El pingüino Wenceslao hizo kilómetros bajo exhaustiva lluvia y frío, ¡qué sacrificio!',
      'Exhíbanse politiquillos zafios, con grandilocuencia borrachuna, quejumbrosa y feble.',
    ],
    pointsPerCharacter: 10,
    pointsToUnlock: 5000,
    color: 'bg-red-500',
  },
  {
    level: 6,
    title: 'Palabras y Números',
    challenges: ['año 2024', '1 mas 1 son 2', 'tengo 10 años', 'el numero 100', 'mi telefono es 123456789', 'la carrera fue en el 2023'],
    pointsPerCharacter: 12,
    pointsToUnlock: 8000,
    color: 'bg-indigo-500',
  },
  {
    level: 7,
    title: 'Práctica con Mayúsculas',
    challenges: ['Mi nombre es Juan.', '¿Donde esta el baño?', '¡Que dia es hoy!', 'El perro se llama Tobi.', 'Madrid es la capital de España.'],
    pointsPerCharacter: 13,
    pointsToUnlock: 12000,
    color: 'bg-pink-500',
  },
  {
    level: 8,
    title: 'Práctica de Párrafos',
    challenges: [
        'La tecnologia ha cambiado el mundo. Ahora podemos comunicarnos con gente de todo el planeta en segundos.',
        'Aprender a teclear rapido es una habilidad muy util. Te ayuda en la escuela, en el trabajo y en tu vida diaria.',
        'Los videojuegos pueden ser divertidos y educativos. Algunos juegos enseñan historia, matematicas o a resolver problemas.'
    ],
    pointsPerCharacter: 15,
    pointsToUnlock: 18000,
    color: 'bg-teal-500',
  },
];


export const KEYBOARD_LAYOUT = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-'],
  [' '],
];

export const FINGER_MAP: { [key: string]: string } = {
  // Left Hand
  '1': 'left-pinky', 'q': 'left-pinky', 'a': 'left-pinky', 'z': 'left-pinky', '¡': 'left-pinky', '!': 'left-pinky',
  '2': 'left-ring', 'w': 'left-ring', 's': 'left-ring', 'x': 'left-ring',
  '3': 'left-middle', 'e': 'left-middle', 'd': 'left-middle', 'c': 'left-middle',
  '4': 'left-index', 'r': 'left-index', 'f': 'left-index', 'v': 'left-index',
  '5': 'left-index', 't': 'left-index', 'g': 'left-index', 'b': 'left-index',
  
  // Right Hand
  '6': 'right-index', 'y': 'right-index', 'h': 'right-index', 'n': 'right-index',
  '7': 'right-index', 'u': 'right-index', 'j': 'right-index', 'm': 'right-index',
  '8': 'right-middle', 'i': 'right-middle', 'k': 'right-middle', ',': 'right-middle',
  '9': 'right-ring', 'o': 'right-ring', 'l': 'right-ring', '.': 'right-ring',
  '0': 'right-pinky', 'p': 'right-pinky', 'ñ': 'right-pinky', '-': 'right-pinky', '?': 'right-pinky', '¿': 'right-pinky',

  // Thumbs
  ' ': 'thumbs',
};

export const FINGER_NAME_MAP: { [key: string]: string } = {
    'left-pinky': 'el meñique izquierdo',
    'left-ring': 'el anular izquierdo',
    'left-middle': 'el dedo corazón izquierdo',
    'left-index': 'el índice izquierdo',
    'right-index': 'el índice derecho',
    'right-middle': 'el dedo corazón derecho',
    'right-ring': 'el anular derecho',
    'right-pinky': 'el meñique derecho',
    'thumbs': 'cualquier pulgar',
};

export const OPPONENTS: Opponent[] = [
    { name: 'Tortuga Lenta', icon: '🐢', cps: 1 },
    { name: 'Conejo Rápido', icon: '🐇', cps: 2.5 },
    { name: 'Zorro Astuto', icon: '🦊', cps: 4 },
    { name: 'Guepardo Veloz', icon: '🐆', cps: 6 },
];

export const RACE_CHALLENGES: string[] = [
    'El veloz murciélago hindú comía feliz cardillo y kiwi.',
    'La cigüeña tocaba el saxofón detrás del palenque de paja.',
    'El pingüino Wenceslao hizo kilómetros bajo exhaustiva lluvia.',
    'Un pequeño paso para un hombre, un gran salto para la humanidad.',
    'El éxito es la suma de pequeños esfuerzos repetidos día tras día.',
];