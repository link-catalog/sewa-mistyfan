import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = 'https://lahoqpwtuhostbraoghy.supabase.co';
const supabaseKey = 'sb_publishable_siJ6ymil4kc7nh_lom-1uQ_BzdEGIPj';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { error } = await supabase
      .from('bookings')
      .insert([
        { 
          nama: body.nama, 
          jumlah: body.jumlah, 
          tanggal: body.tanggal || null,
          lokasi: body.lokasi, 
          acara: body.acara, 
          catatan: body.catatan 
        }
      ]);

    if (error) throw error;
    return NextResponse.json({ ok: true, message: 'Berhasil disimpan' });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}