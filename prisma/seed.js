import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function seedProducts() {
  try {

    await prisma.products.create({
      data: {
        title: "2 шт., автомобильные непромокаемые чехлы для защиты от дождя",
        description: "2 шт. Автомобильный дождь брови непромокаемый защитный чехол для Holden TRAILBLAZER VF COLORADO CRUZE COMMODORE Monaro Авто внешние аксессуары\n" +
          "\n" +
          "Особенности: \n" +
          "100% Высокое качество и абсолютно новый. \n" +
          "Хорошо продуманный товар, не мешает вашему виду вождения. \n" +
          "Простая установка и стабильность, защита от дождя, износостойкость и долговечность. \n" +
          " \n" +
          " Материал:ПВХ \n" +
          " Размер:Прибл. 17,3*5,6 см \n" +
          " Количество:2 шт./1 комплект \n" +
          " \n" +
          " Посылка включает: \n" +
          "2 X автомобильные наклейки для бровей от дождя",
        url: [
          'https://chyixyfhtduzwlreedwc.supabase.co/storage/v1/object/sign/aliexpress-clone-nuxt-storage/1/1.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGlleHByZXNzLWNsb25lLW51eHQtc3RvcmFnZS8xLzEud2VicCIsImlhdCI6MTcxMzcyMTIzOCwiZXhwIjo0ODY3MzIxMjM4fQ.KDp3huby_Hi0Qsa7Yq7LvY5kFuTeZFarTjKAvA0Fs7A&t=2024-04-21T17%3A40%3A38.009Z',
          'https://chyixyfhtduzwlreedwc.supabase.co/storage/v1/object/sign/aliexpress-clone-nuxt-storage/1/2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGlleHByZXNzLWNsb25lLW51eHQtc3RvcmFnZS8xLzIud2VicCIsImlhdCI6MTcxMzcyMTI1MCwiZXhwIjoxNzQ1MjU3MjUwfQ.0N0ftySOsVZa_6KAAO1qa6RbO0zGTd7NXVEwXAVCzKk&t=2024-04-21T17%3A40%3A50.647Z',
          'https://chyixyfhtduzwlreedwc.supabase.co/storage/v1/object/sign/aliexpress-clone-nuxt-storage/1/3.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGlleHByZXNzLWNsb25lLW51eHQtc3RvcmFnZS8xLzMud2VicCIsImlhdCI6MTcxMzcyMTI2MiwiZXhwIjoxNzQ1MjU3MjYyfQ.8YJQK6S_K_9Ns3CNFPrCBK0OvyP6y9yr2HQJ9YKFuco&t=2024-04-21T17%3A41%3A02.552Z',
          'https://chyixyfhtduzwlreedwc.supabase.co/storage/v1/object/sign/aliexpress-clone-nuxt-storage/1/4.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGlleHByZXNzLWNsb25lLW51eHQtc3RvcmFnZS8xLzQud2VicCIsImlhdCI6MTcxMzcyMTI2OSwiZXhwIjoxNzQ1MjU3MjY5fQ.7yRSnf9D4-1-U16iFJaF44z9XzmTQd0yCkZHJPmI_uY&t=2024-04-21T17%3A41%3A09.566Z',
          'https://chyixyfhtduzwlreedwc.supabase.co/storage/v1/object/sign/aliexpress-clone-nuxt-storage/1/5.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGlleHByZXNzLWNsb25lLW51eHQtc3RvcmFnZS8xLzUud2VicCIsImlhdCI6MTcxMzcyMTI3OSwiZXhwIjoxNzQ1MjU3Mjc5fQ.LkIdlrSUVrxJbu5-AdYMvMpC5CdE0AgtRsYi8Xd923c&t=2024-04-21T17%3A41%3A19.246Z',
        ],
        price: 2500 // EG: 25.00
      },
    });

    await prisma.products.create({
      data: {
        title: "1/12 миниатюрный чайный чайник для кукольного домика/чайный чайник, игрушки для ролевых игр",
        description: "Описание\n" +
          "Характеристики:\n" +
          "\n" +
          "Товар: Миниатюрный чайник\n" +
          "\n" +
          "Материал: металл\n" +
          "\n" +
          "Размер: 30*26 мм\n" +
          "\n" +
          "Подходит для 1:12 миниатюрного кукольного домика\n" +
          "\n" +
          "Комплект поставки:\n" +
          "\n" +
          "1 * миниатюрный чайник",
        url: [
          'https://chyixyfhtduzwlreedwc.supabase.co/storage/v1/object/sign/aliexpress-clone-nuxt-storage/2/1.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGlleHByZXNzLWNsb25lLW51eHQtc3RvcmFnZS8yLzEud2VicCIsImlhdCI6MTcxMzcyMTI5NSwiZXhwIjoxNzQ1MjU3Mjk1fQ.gHVPzSlj_9AJYrZBabgOvWoV4N1XBGy9KWX2A1d99Yw&t=2024-04-21T17%3A41%3A35.721Z',
          'https://chyixyfhtduzwlreedwc.supabase.co/storage/v1/object/sign/aliexpress-clone-nuxt-storage/2/2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGlleHByZXNzLWNsb25lLW51eHQtc3RvcmFnZS8yLzIud2VicCIsImlhdCI6MTcxMzcyMTMwNiwiZXhwIjoxNzQ1MjU3MzA2fQ.DKhJXyofFJJ7GsiMU6_d1aRAVDM2GeRxp2bWHj4JKHY&t=2024-04-21T17%3A41%3A46.124Z',
          'https://chyixyfhtduzwlreedwc.supabase.co/storage/v1/object/sign/aliexpress-clone-nuxt-storage/2/3.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGlleHByZXNzLWNsb25lLW51eHQtc3RvcmFnZS8yLzMud2VicCIsImlhdCI6MTcxMzcyMTMxMSwiZXhwIjoxNzQ1MjU3MzExfQ.fpIoC8awZbOyDsGKR3aOyMcM6Xbxogbt_V8OgmjkZzQ&t=2024-04-21T17%3A41%3A51.590Z',
          'https://chyixyfhtduzwlreedwc.supabase.co/storage/v1/object/sign/aliexpress-clone-nuxt-storage/2/4.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGlleHByZXNzLWNsb25lLW51eHQtc3RvcmFnZS8yLzQud2VicCIsImlhdCI6MTcxMzcyMTMxNywiZXhwIjoxNzQ1MjU3MzE3fQ.U5nJZCHd9odE8Yu3telX64V9CZSV-UfCD3P7YeJh1d0&t=2024-04-21T17%3A41%3A57.058Z',
          'https://chyixyfhtduzwlreedwc.supabase.co/storage/v1/object/sign/aliexpress-clone-nuxt-storage/2/5.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGlleHByZXNzLWNsb25lLW51eHQtc3RvcmFnZS8yLzUud2VicCIsImlhdCI6MTcxMzcyMTMyMywiZXhwIjoxNzQ1MjU3MzIzfQ.j3fOYN_g9qwcmlW6dJX21BIiEJqQinM-q44sQy5zSTE&t=2024-04-21T17%3A42%3A03.505Z',
        ],
        price: 1999
      },
    });

    await prisma.products.create({
      data: {
        title: "150 шт., детский мини-пазл-трубка",
        description: "🧩Размер готовой головоломки: 15*10 см/5,91*3,94 дюйма\n" +
          "\n" +
          "🧩Пазл состоит из 150 частей пейзажной головоломки с масляной живописью, на головоломке вы можете почувствовать очарование пейзажа.\n" +
          "\n" +
          "🧩Готовый размер этой головоломки составляет 15*10 см/5,91*3,94 дюйма, а процесс сборки очень прост и легок, что является подходящей игрой на короткое время.\n" +
          "\n" +
          "🧩Головоломка изготовлена из белой доски для головоломок премиум-класса и точно вырезана для плотной посадки, четкой и специальной обработки поверхности пленкой.",
        url: [
          'https://chyixyfhtduzwlreedwc.supabase.co/storage/v1/object/sign/aliexpress-clone-nuxt-storage/3/1.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGlleHByZXNzLWNsb25lLW51eHQtc3RvcmFnZS8zLzEud2VicCIsImlhdCI6MTcxMzcyMTM0MiwiZXhwIjoxNzQ1MjU3MzQyfQ.xUh8CODCCW_iKPareUedwPU5TK_fPUBWeneesfTPsMk&t=2024-04-21T17%3A42%3A22.585Z',
          'https://chyixyfhtduzwlreedwc.supabase.co/storage/v1/object/sign/aliexpress-clone-nuxt-storage/3/2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGlleHByZXNzLWNsb25lLW51eHQtc3RvcmFnZS8zLzIud2VicCIsImlhdCI6MTcxMzcyMTM1MSwiZXhwIjoxNzQ1MjU3MzUxfQ.o1oitaG6kEl4xJ42paVaMkqUJRZwdxewig-m1KIjOIQ&t=2024-04-21T17%3A42%3A30.953Z',
          'https://chyixyfhtduzwlreedwc.supabase.co/storage/v1/object/sign/aliexpress-clone-nuxt-storage/3/3.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGlleHByZXNzLWNsb25lLW51eHQtc3RvcmFnZS8zLzMud2VicCIsImlhdCI6MTcxMzcyMTM1NiwiZXhwIjoxNzQ1MjU3MzU2fQ.VS1Mo1-bVT8Ha3EBaEdNopydx54c0lKXOfK8FQ8atZY&t=2024-04-21T17%3A42%3A36.720Z',
          'https://chyixyfhtduzwlreedwc.supabase.co/storage/v1/object/sign/aliexpress-clone-nuxt-storage/3/4.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGlleHByZXNzLWNsb25lLW51eHQtc3RvcmFnZS8zLzQud2VicCIsImlhdCI6MTcxMzcyMTM2MSwiZXhwIjoxNzQ1MjU3MzYxfQ.cWQ-dhwAOXBZr8uWo_MEQIrEA0vlSIZhPE7I2IdkZ68&t=2024-04-21T17%3A42%3A41.654Z',
        ],
        price: 9999
      },
    });

    await prisma.products.create({
      data: {
        title: "Новинка и оригинал, модель MM80FU040PC TO-247 MM80FU040 TO-3P 80A 400 В, 1 шт.",
        description: "Описание\n" +
          "Комплект Электронных Компонентов\n" +
          "Комплект соединителей\tКомплект резисторов\tКомплект конденсаторов\tIC комплект чипов\n" +
          "Комплект потенциометра\tПечатная плата для экспериментов\tТранзисторный комплект\tДругие комплекты\n" +
          "Комплект регулятора напряжения\tНабор диодов\tКомплекты SMD светодиодный\tКомплект печатных плат",
        url: "https://picsum.photos/id/24/800/800",
        price: 5999
      },
    });

    await prisma.products.create({
      data: {
        title: "Cuban Mug",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: [
          'https://chyixyfhtduzwlreedwc.supabase.co/storage/v1/object/sign/aliexpress-clone-nuxt-storage/4/1.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGlleHByZXNzLWNsb25lLW51eHQtc3RvcmFnZS80LzEud2VicCIsImlhdCI6MTcxMzcyMTM3MiwiZXhwIjoxNzQ1MjU3MzcyfQ.GRC7G-rVHYJUb1wQkAclVCi1CvguXYJYFeJrfg4p13E&t=2024-04-21T17%3A42%3A52.079Z',
        ],
        price: 1299
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();