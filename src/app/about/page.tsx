import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="py-12">
        <h1 className="text-3xl font-bold mb-8">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/profile.jpg" // public 폴더에 프로필 이미지를 넣어주세요
              alt="Profile"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">안녕하세요!</h2>
            <p className="text-gray-600 mb-4">
              저는 [분야]에서 [년차]년의 경험을 가진 [직업]입니다.
              [본인의 전문 분야와 관심사에 대해 설명해주세요.]
            </p>
            
            <h3 className="text-xl font-semibold mb-3">기술 스택</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Frontend</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Backend</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 