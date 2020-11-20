import "./set-public-path";

export { default as Header } from "./components/Header.vue";
export function tileComponent(title: string): string {
  return `La somme de ${title}`;
}
