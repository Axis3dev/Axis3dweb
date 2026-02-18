import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const form = await request.formData();
  const nombre = form.get('nombre');
  const correo = form.get('correo');
  const telefono = form.get('telefono');

  if (!nombre || !correo || !telefono) {
    return NextResponse.json({ ok: false, message: 'Faltan datos obligatorios.' }, { status: 400 });
  }

  return NextResponse.json({ ok: true, message: '¡Solicitud enviada! Te responderemos pronto.' });
}
