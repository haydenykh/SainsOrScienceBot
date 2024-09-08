import ShuffleArray from "./ShuffleArray.js";

export default function ShuffleMap<K, V>(map: Map<K, V>): Map<K, V> {
    const array = Array.from(map.entries());
    const shuffledArray = ShuffleArray(array);

    return new Map(shuffledArray);
}
