import express from "express";
import { User } from "../models/User";

const router = express.Router();

let users: User[] = [];
let nextId = 1;

router.post("/", (req, res) => {
    const name = req.body.name;

    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }

    const newUser: User = { id: nextId++, UserName: name };
    users.push(newUser);

    res.status(201).json(newUser);
});

router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
});

export default router;

