import prisma from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, message, subject, contact, email } = await req.json();

    const alreadySubmitted = await prisma.form.findFirst({
      where: {
        email,
      },
    });
    if (alreadySubmitted)
      return new Response(
        JSON.stringify({
          success: false,
          message: "User already submitted the form !!!",
        })
      );

    await prisma.form.create({
      data: {
        name,
        email,
        contact,
        subject,
        message,
      },
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your submission !!!",
      })
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, message: "Something went wrong !!!" })
    );
  }
}
