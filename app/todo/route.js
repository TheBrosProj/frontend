// app/api/todos.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    const todos = await prisma.todos.findMany();
    return NextResponse.json(todos);
}

export async function POST(request) {
    const { data } = await request.json();

    const newTodo = await prisma.todos.create({
        data: { data: data, state: 'active', time: new Date() },
    });

    return NextResponse.json(newTodo, { status: 201 });
}

export async function DELETE(request) {
    const { id } = await request.json();

    await prisma.todos.delete({
        where: { id: id },
    });

    return NextResponse.json(null, { status: 204 });
}

export async function PUT(request) {
    const { id, state } = await request.json();

    const updatedTodo = await prisma.todos.update({
        where: { id: id },
        data: { state: state },
    });

    return NextResponse.json(updatedTodo);
}
