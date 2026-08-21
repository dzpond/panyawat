const UNCATEGORIZED_ITEMS = [
  { num: "01", ext: "jpg" },
  { num: "02", ext: "jpg" },
  { num: "03", ext: "jpg" },
  { num: "04", ext: "jpg" },
  { num: "05", ext: "jpg" },
  { num: "06", ext: "jpg" },
  { num: "07", ext: "jpg" },
  { num: "08", ext: "jpg" },
  { num: "09", ext: "jpg" },
  { num: "10", ext: "jpg" },
];

const GALLERY_ITEMS = [
  { num: "11", ext: "jpg", category: "๑.๑ สร้างและหรือพัฒนาหลักสูตร" },
  { num: "12", ext: "png", category: "๑.๑ สร้างและหรือพัฒนาหลักสูตร" },
  { num: "13", ext: "png", category: "๑.๑ สร้างและหรือพัฒนาหลักสูตร" },

  { num: "14", ext: "png", category: "๑.๒ ออกแบบการจัดการเรียนรู้" },
  { num: "15", ext: "png", category: "๑.๒ ออกแบบการจัดการเรียนรู้" },
  { num: "16", ext: "png", category: "๑.๒ ออกแบบการจัดการเรียนรู้" },

  { num: "17", ext: "png", category: "๑.๓ จัดกิจกรรมการเรียนรู้" },
  { num: "18", ext: "png", category: "๑.๓ จัดกิจกรรมการเรียนรู้" },
  { num: "19", ext: "png", category: "๑.๓ จัดกิจกรรมการเรียนรู้" },

  { num: "20", ext: "png", category: "๑.๔ สร้างและหรือพัฒนาสื่อ นวัตกรรม เทคโนโลยี และแหล่งเรียนรู้" },
  { num: "21", ext: "png", category: "๑.๔ สร้างและหรือพัฒนาสื่อ นวัตกรรม เทคโนโลยี และแหล่งเรียนรู้" },
  { num: "22", ext: "png", category: "๑.๔ สร้างและหรือพัฒนาสื่อ นวัตกรรม เทคโนโลยี และแหล่งเรียนรู้" },

  { num: "23", ext: "png", category: "๑.๕ วัดและประเมินผลการเรียนรู้" },
  { num: "24", ext: "png", category: "๑.๕ วัดและประเมินผลการเรียนรู้" },

  { num: "25", ext: "png", category: "๑.๖ ศึกษา วิเคราะห์ และสังเคราะห์ เพื่อแก้ปัญหาหรือพัฒนาการเรียนรู้" },
  { num: "26", ext: "png", category: "๑.๖ ศึกษา วิเคราะห์ และสังเคราะห์ เพื่อแก้ปัญหาหรือพัฒนาการเรียนรู้" },
  { num: "27", ext: "png", category: "๑.๖ ศึกษา วิเคราะห์ และสังเคราะห์ เพื่อแก้ปัญหาหรือพัฒนาการเรียนรู้" },

  { num: "28", ext: "png", category: "๑.๗ จัดบรรยากาศที่ส่งเสริมและพัฒนาผู้เรียน" },
  { num: "29", ext: "png", category: "๑.๗ จัดบรรยากาศที่ส่งเสริมและพัฒนาผู้เรียน" },
  { num: "30", ext: "png", category: "๑.๗ จัดบรรยากาศที่ส่งเสริมและพัฒนาผู้เรียน" },

  { num: "31", ext: "jpg", category: "๑.๘ อบรมและพัฒนาคุณลักษณะที่ดีของผู้เรียน" },
  { num: "32", ext: "jpg", category: "๑.๘ อบรมและพัฒนาคุณลักษณะที่ดีของผู้เรียน" },
  { num: "33", ext: "jpg", category: "๑.๘ อบรมและพัฒนาคุณลักษณะที่ดีของผู้เรียน" },

  { num: "34", ext: "png", category: "๒.๑ จัดทำข้อมูลสารสนเทศของผู้เรียนและรายวิชา" },
  { num: "35", ext: "png", category: "๒.๑ จัดทำข้อมูลสารสนเทศของผู้เรียนและรายวิชา" },

  { num: "36", ext: "png", category: "๒.๒ ดำเนินการตามระบบดูแลช่วยเหลือผู้เรียน" },
  { num: "37", ext: "png", category: "๒.๒ ดำเนินการตามระบบดูแลช่วยเหลือผู้เรียน" },
  { num: "38", ext: "png", category: "๒.๒ ดำเนินการตามระบบดูแลช่วยเหลือผู้เรียน" },

  { num: "39", ext: "png", category: "๒.๓ ปฏิบัติงานวิชาการและงานอื่น ๆ ของสถานศึกษา" },
  { num: "40", ext: "jpg", category: "๒.๓ ปฏิบัติงานวิชาการและงานอื่น ๆ ของสถานศึกษา" },
  { num: "41", ext: "jpg", category: "๒.๓ ปฏิบัติงานวิชาการและงานอื่น ๆ ของสถานศึกษา" },

  { num: "42", ext: "png", category: "๒.๔ ประสานความร่วมมือกับผู้ปกครอง ภาคีเครือข่าย และหรือสถานประกอบการ" },
  { num: "43", ext: "jpg", category: "๒.๔ ประสานความร่วมมือกับผู้ปกครอง ภาคีเครือข่าย และหรือสถานประกอบการ" },
  { num: "44", ext: "png", category: "๒.๔ ประสานความร่วมมือกับผู้ปกครอง ภาคีเครือข่าย และหรือสถานประกอบการ" },

  { num: "45", ext: "png", category: "๓.๑ พัฒนาตนเองอย่างเป็นระบบและต่อเนื่อง" },
  { num: "46", ext: "png", category: "๓.๑ พัฒนาตนเองอย่างเป็นระบบและต่อเนื่อง" },
  { num: "47", ext: "png", category: "๓.๑ พัฒนาตนเองอย่างเป็นระบบและต่อเนื่อง" },

  { num: "48", ext: "png", category: "๓.๒ มีส่วนร่วมในการแลกเปลี่ยนเรียนรู้ทางวิชาชีพ" },
  { num: "49", ext: "png", category: "๓.๒ มีส่วนร่วมในการแลกเปลี่ยนเรียนรู้ทางวิชาชีพ" },
  { num: "50", ext: "png", category: "๓.๒ มีส่วนร่วมในการแลกเปลี่ยนเรียนรู้ทางวิชาชีพ" },

  { num: "51", ext: "png", category: "๓.๓ นำความรู้ ความสามารถ ทักษะ ที่ได้จากการพัฒนาตนเองและวิชาชีพมาใช้" },
  { num: "52", ext: "png", category: "๓.๓ นำความรู้ ความสามารถ ทักษะ ที่ได้จากการพัฒนาตนเองและวิชาชีพมาใช้" },
  { num: "53", ext: "png", category: "๓.๓ นำความรู้ ความสามารถ ทักษะ ที่ได้จากการพัฒนาตนเองและวิชาชีพมาใช้" },
];

const GALLERY_CATEGORIES = [
  "๑.๑ สร้างและหรือพัฒนาหลักสูตร",
  "๑.๒ ออกแบบการจัดการเรียนรู้",
  "๑.๓ จัดกิจกรรมการเรียนรู้",
  "๑.๔ สร้างและหรือพัฒนาสื่อ นวัตกรรม เทคโนโลยี และแหล่งเรียนรู้",
  "๑.๕ วัดและประเมินผลการเรียนรู้",
  "๑.๖ ศึกษา วิเคราะห์ และสังเคราะห์ เพื่อแก้ปัญหาหรือพัฒนาการเรียนรู้",
  "๑.๗ จัดบรรยากาศที่ส่งเสริมและพัฒนาผู้เรียน",
  "๑.๘ อบรมและพัฒนาคุณลักษณะที่ดีของผู้เรียน",
  "๒.๑ จัดทำข้อมูลสารสนเทศของผู้เรียนและรายวิชา",
  "๒.๒ ดำเนินการตามระบบดูแลช่วยเหลือผู้เรียน",
  "๒.๓ ปฏิบัติงานวิชาการและงานอื่น ๆ ของสถานศึกษา",
  "๒.๔ ประสานความร่วมมือกับผู้ปกครอง ภาคีเครือข่าย และหรือสถานประกอบการ",
  "๓.๑ พัฒนาตนเองอย่างเป็นระบบและต่อเนื่อง",
  "๓.๒ มีส่วนร่วมในการแลกเปลี่ยนเรียนรู้ทางวิชาชีพ",
  "๓.๓ นำความรู้ ความสามารถ ทักษะ ที่ได้จากการพัฒนาตนเองและวิชาชีพมาใช้",
];

const gallerySections = document.getElementById("gallery-sections");

function createGalleryGrid(items) {
  const grid = document.createElement("div");
  grid.className = "gallery-grid";

  items.forEach((item) => {
    const figure = document.createElement("figure");
    figure.className = "gallery-item";

    const img = document.createElement("img");
    img.src = `gallery/${item.num}.${item.ext}`;
    img.alt = `รูปภาพ ${item.num}`;

    figure.appendChild(img);
    grid.appendChild(figure);
  });

  return grid;
}

if (gallerySections) {
  const uncategorizedSection = document.createElement("section");
  uncategorizedSection.className = "gallery-category";
  uncategorizedSection.appendChild(createGalleryGrid(UNCATEGORIZED_ITEMS));
  gallerySections.appendChild(uncategorizedSection);

  GALLERY_CATEGORIES.forEach((category) => {
    const section = document.createElement("section");
    section.className = "gallery-category";

    const heading = document.createElement("h2");
    heading.className = "gallery-category-title";
    heading.textContent = category;
    section.appendChild(heading);

    const grid = createGalleryGrid(GALLERY_ITEMS.filter((item) => item.category === category));

    section.appendChild(grid);
    gallerySections.appendChild(section);
  });
}
