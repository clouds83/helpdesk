import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function DELETE(_, { params }) {
  const supabase = createRouteHandlerClient({ cookies })

  const { error } = await supabase.from('tickets').delete().eq('id', params.id)

  return NextResponse.json({ error })
}

// export const dynamic = 'force-dynamic'

// export async function GET(_, { params }) {
//   const { id } = params

//   const res = await fetch(`http://localhost:4000/tickets/${id}`)

//   const ticket = await res.json()

//   if (!res.ok) {
//     return NextResponse.json(
//       {
//         error: 'Cannot find the ticket',
//       },
//       {
//         status: 404,
//       }
//     )
//   }

//   return NextResponse.json(ticket, {
//     status: 200,
//   })
// }
