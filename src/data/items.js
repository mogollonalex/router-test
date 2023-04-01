export const items = [
    { id: "0", name: "Marcos", telephone: "1111 0000", favorite: false },
    { id: "1", name: "Lena", telephone: "122 1111 0000", favorite: true },
];

export function getContact(id) {
    return items.find((item) => item.id === id);
}