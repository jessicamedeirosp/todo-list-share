import { Todo } from "../Interfaces/Todo";
import api from "./api";

export async function create(url: string, todo: Todo) {
  const { data } = await api.post(url, todo);
  return data;
}

export async function read(url: string) {
  const { data } = await api.get(url);
  return data;
}

export async function update(url: string, todo: Todo) {
  const { data } = await api.put(url, todo);
  return data;
}

export async function remove(url: string) {
  const { data } = await api.delete(url);
  return data;
}
