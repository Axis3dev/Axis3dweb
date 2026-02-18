'use client';

import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/site';
import { whatsappLink } from '@/lib/utils';
import { FormEvent, useState } from 'react';

type Status = { ok: boolean; message: string } | null;

export function ProjectForm() {
  const [status, setStatus] = useState<Status>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    if (!form.get('nombre') || !form.get('telefono') || !form.get('correo') || !form.get('privacidad')) {
      setStatus({ ok: false, message: 'Completa los campos requeridos y acepta el aviso.' });
      return;
    }

    setLoading(true);
    const res = await fetch('/api/cotizacion', { method: 'POST', body: form });
    const data = await res.json();
    setLoading(false);

    setStatus({ ok: data.ok, message: data.message });
    if (data.ok) e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="glass mx-auto max-w-2xl space-y-4 rounded-3xl p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <input name="nombre" required placeholder="Nombre" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3" />
        <input name="telefono" required placeholder="WhatsApp / Teléfono" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3" />
        <input name="correo" required type="email" placeholder="Correo" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 md:col-span-2" />
        <select name="tipo" className="rounded-xl border border-white/15 bg-axis-bg px-4 py-3">
          <option>Prototipo</option>
          <option>Refacción</option>
          <option>Producción en serie</option>
          <option>Modelado CAD</option>
        </select>
        <select name="material" className="rounded-xl border border-white/15 bg-axis-bg px-4 py-3">
          <option>PLA</option>
          <option>PETG</option>
          <option>ABS</option>
          <option>Nylon</option>
          <option>No estoy seguro</option>
        </select>
      </div>

      <label className="block rounded-xl border border-dashed border-white/25 bg-white/5 p-4 text-sm text-white/70">
        Subir archivos (STL/OBJ/ZIP)
        <input type="file" name="archivos" accept=".stl,.obj,.zip" multiple className="mt-2 block w-full text-xs" />
      </label>

      <textarea name="comentarios" rows={4} placeholder="Comentarios" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3" />

      <label className="flex items-center gap-2 text-sm text-white/70">
        <input type="checkbox" name="privacidad" /> Acepto aviso de privacidad
      </label>

      <Button type="submit" className="w-full" variant="primary">
        {loading ? 'Enviando...' : 'Enviar solicitud'}
      </Button>

      {status ? (
        <div className={`rounded-xl border p-3 text-sm ${status.ok ? 'border-emerald-400/50 bg-emerald-500/10 text-emerald-200' : 'border-red-400/40 bg-red-500/10 text-red-200'}`}>
          <p>{status.message}</p>
          {status.ok ? (
            <a href={whatsappLink(SITE_CONFIG.WHATSAPP_NUMBER, 'Hola AXIS3D, acabo de enviar mi solicitud de cotización.')} className="mt-2 inline-block text-axis-orange">
              Abrir WhatsApp
            </a>
          ) : null}
        </div>
      ) : null}
    </form>
  );
}
