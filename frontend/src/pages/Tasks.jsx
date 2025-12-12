import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    due: "",
    priority: "medium",
    status: "todo",
    files: [],
    image: null,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onImage = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setForm((f) => ({ ...f, image: { file, url } }));
    }
  };

  const onFiles = (e) => {
    const list = Array.from(e.target.files || []);
    setForm((f) => ({ ...f, files: list }));
  };

  const addTask = (e) => {
    e.preventDefault();
    setTasks((t) => [{ id: crypto.randomUUID(), ...form }, ...t]);
    setForm({
      title: "",
      description: "",
      due: "",
      priority: "medium",
      status: "todo",
      files: [],
      image: null,
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 p-4">
      <Card className="p-4">
        <h2 className="text-xl font-semibold mb-3">Create task</h2>
        <form onSubmit={addTask} className="space-y-3">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" value={form.title} onChange={onChange} required />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Input id="description" name="description" value={form.description} onChange={onChange} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="due">Due date</Label>
              <Input id="due" name="due" type="date" value={form.due} onChange={onChange} />
            </div>
            <div>
              <Label htmlFor="priority">Priority</Label>
              <select
                id="priority"
                name="priority"
                value={form.priority}
                onChange={onChange}
                className="border rounded px-2 py-2 w-full bg-background"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                name="status"
                value={form.status}
                onChange={onChange}
                className="border rounded px-2 py-2 w-full bg-background"
              >
                <option value="todo">To do</option>
                <option value="inprogress">In progress</option>
                <option value="done">Done</option>
              </select>
            </div>
            <div>
              <Label htmlFor="image">Task image</Label>
              <Input id="image" type="file" accept="image/*" onChange={onImage} />
            </div>
          </div>
          <div>
            <Label htmlFor="files">Attachments</Label>
            <Input id="files" type="file" multiple onChange={onFiles} />
          </div>
          {form.image && (
            <div className="mt-2">
              <Label>Preview</Label>
              <img
                src={form.image.url}
                alt="Task preview"
                className="mt-1 rounded border max-h-40 object-cover"
              />
            </div>
          )}
          <Button type="submit" className="w-full">Add task</Button>
        </form>
      </Card>

      <Card className="p-4">
        <h2 className="text-xl font-semibold mb-3">Your tasks</h2>
        <Separator className="mb-3" />
        <div className="space-y-3">
          {tasks.map((t) => (
            <div key={t.id} className="border rounded p-3 bg-card">
              <div className="flex items-center justify-between">
                <div className="font-medium">{t.title}</div>
                <span className="text-xs px-2 py-1 rounded bg-muted">{t.priority}</span>
              </div>
              {t.image?.url && (
                <img src={t.image.url} alt="" className="mt-2 rounded max-h-40 object-cover" />
              )}
              {t.description && <p className="text-sm text-muted-foreground mt-1">{t.description}</p>}
              <div className="flex gap-3 text-xs mt-2">
                {t.due && <span>Due: {t.due}</span>}
                <span>Status: {t.status}</span>
                {t.files?.length ? <span>Files: {t.files.length}</span> : null}
              </div>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="destructive" size="sm">Delete</Button>
              </div>
            </div>
          ))}
          {!tasks.length && <p className="text-sm text-muted-foreground">No tasks yet.</p>}
        </div>
      </Card>
    </div>
  );
}