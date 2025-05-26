import { Application, Router } from "./deps.ts";
import { SupabaseClient } from "./deps.ts";

const supabase = new SupabaseClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_KEY")!
);

const router = new Router();

// Middleware: Solo admins
const soloAdmin = async (ctx: any, next: any) => {
  const token = ctx.request.headers.get("Authorization")?.split(" ")[1];
  const { data: { user } } = await supabase.auth.getUser(token);
  
  if (user?.rol !== "admin") {
    ctx.response.status = 403;
    ctx.response.body = { error: "Solo admins pueden acceder" };
    return;
  }
  await next();
};

// Agregar módulo (solo admin)
router.post("/api/modulos", soloAdmin, async (ctx) => {
  const body = await ctx.request.body().value;
  const { data, error } = await supabase.from("modulos").insert(body);
  ctx.response.body = data;
});

const app = new Application();
app.use(router.routes());
await app.listen({ port: 8000 });