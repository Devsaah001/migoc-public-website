import logo from './assets/mymoney.png';

function App() {
  const services = [
    {
      title: 'Mobile Money',
      text: 'Fast and reliable mobile money support for daily customer transactions.',
    },
    {
      title: 'Remittance',
      text: 'Professional remittance service with transparent tracking and handling.',
    },
    {
      title: 'Financial Services',
      text: 'Structured savings and financial service support for individuals and groups.',
    },
    {
      title: 'Microfinance Loans',
      text: 'Simple loan application and review process built for accountability.',
    },
    {
      title: 'Foreign Exchange',
      text: 'Organized exchange operations with secure records and professional service.',
    },
    {
      title: 'Customer Support',
      text: 'Clear customer assistance for account access, inquiries, and service guidance.',
    },
  ];

  const highlights = [
    {
      label: 'Accountability',
      text: 'Every important operation is structured for traceability and confidence.',
    },
    {
      label: 'Transparency',
      text: 'Clean records and professional workflows support trust in every service.',
    },
    {
      label: 'Accessibility',
      text: 'Designed to work smoothly on phones, tablets, and computers.',
    },
  ];

  const loanUrl = '/apply';
  const balanceUrl = '/balance';
  const staffUrl = '/app';

  return (
    <div className="min-h-screen bg-white text-[#0a1f44] font-sans">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div className="flex items-center gap-3 md:gap-4">
            <img
              src={logo}
              alt="My Money Logo"
              className="h-12 w-12 rounded-xl object-contain md:h-14 md:w-14"
            />

            <div>
              <h1 className="text-2xl font-black tracking-tight md:text-3xl">MIGoC</h1>
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-gray-400 md:text-[10px]">
                My Money Financial Services
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-bold text-gray-600 md:flex">
            <a href="#home" className="transition hover:text-[#165bbd]">Home</a>
            <a href="#services" className="transition hover:text-[#165bbd]">Services</a>
            <a href={loanUrl} className="transition hover:text-[#165bbd]">Apply</a>
            <a href={balanceUrl} className="transition hover:text-[#165bbd]">Check Balance</a>
            <a href="#contact" className="transition hover:text-[#165bbd]">Contact</a>

            <a
              href={staffUrl}
              className="inline-flex items-center justify-center rounded-full bg-[#0a1f44] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#165bbd]"
            >
              Staff Login
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,91,189,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(10,31,68,0.06),transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-24 md:px-10 md:pb-36 md:pt-32">
            <div className="max-w-4xl">
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#165bbd]">
                Modern Financial Access
              </p>

              <h2 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] tracking-tight text-[#0a1f44] md:text-7xl">
                Powering everyday finance with speed, trust, and control.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-500 md:text-xl">
                MIGoC My Money delivers trusted financial operations including Mobile Money,
                Remittance, Microfinance, Foreign Exchange, and transparent service
                management for customers and businesses.
              </p>

              <div className="mt-12 flex flex-col gap-5 sm:flex-row">
                <a
                  href={loanUrl}
                  className="inline-flex items-center justify-center rounded-full bg-[#0a1f44] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#165bbd]"
                >
                  Apply for Loan
                </a>

                <a
                  href={balanceUrl}
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-4 text-sm font-semibold text-[#0a1f44] transition duration-300 hover:border-[#165bbd] hover:text-[#165bbd]"
                >
                  Check Balance
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#f7f9fc] py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-14 max-w-2xl">
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#165bbd]">
                Services
              </p>
              <h3 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#0a1f44] md:text-5xl">
                Built for trust, speed, and everyday financial service.
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-gray-500">
                Our services are designed to support secure transactions, customer access,
                and professional financial operations.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <h4 className="text-2xl font-black tracking-tight text-[#0a1f44]">
                    {item.title}
                  </h4>
                  <p className="mt-4 leading-relaxed text-gray-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#165bbd]">
                  Why MIGoC
                </p>
                <h3 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#0a1f44] md:text-5xl">
                  Designed to support confidence, control, and modern financial service delivery.
                </h3>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
                  MIGoC combines professional operations with a clean digital experience,
                  helping customers and businesses interact with speed, clarity, and trust.
                </p>
              </div>

              <div className="space-y-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm"
                  >
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-[#165bbd]">
                      {item.label}
                    </p>
                    <p className="mt-3 leading-relaxed text-gray-500">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="apply" className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="rounded-[2.5rem] bg-[#0a1f44] p-10 text-white md:p-14">
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-200">
                Loan Application
              </p>
              <h3 className="mt-4 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
                Start your microfinance loan application with confidence.
              </h3>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
                Submit your application securely online for review and approval.
              </p>

              <div className="mt-8">
                <a
                  href={loanUrl}
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0a1f44] transition hover:bg-blue-50"
                >
                  Begin Application
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="balance" className="pb-20 md:pb-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="rounded-[2.5rem] border border-gray-100 bg-white p-10 shadow-sm md:p-14">
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#165bbd]">
                Customer Access
              </p>
              <h3 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-[#0a1f44] md:text-5xl">
                Check your balance and follow your financial activity easily.
              </h3>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
                A clean customer portal will allow users to verify their savings balance
                and stay informed about their account.
              </p>

              <div className="mt-8">
                <a
                  href={balanceUrl}
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-8 py-4 text-sm font-semibold text-[#0a1f44] transition hover:border-[#165bbd] hover:text-[#165bbd]"
                >
                  Open Balance Access
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-gray-100 bg-[#f7f9fc] py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#165bbd]">
                Contact
              </p>
              <h3 className="mt-4 text-3xl font-black tracking-tight text-[#0a1f44] md:text-5xl">
                Let’s help customers access financial services with confidence.
              </h3>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500">
                MIGoC My Money is building a clean and modern financial service experience
                for everyday customer operations.
              </p>
            </div>

            <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm">
              <div className="space-y-5">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">
                    Business Name
                  </p>
                  <p className="mt-2 text-lg font-bold text-[#0a1f44]">
                    MIGoC My Money Financial Services
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">
                    Website
                  </p>
                  <p className="mt-2 text-lg font-bold text-[#0a1f44]">
                    migoclr.com
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">
                    Customer Access
                  </p>
                  <p className="mt-2 text-lg font-bold text-[#0a1f44]">
                    Loan applications and balance check portal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="rounded-[2.5rem] border border-gray-100 bg-[#0a1f44] p-10 text-white shadow-sm md:p-14">
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-200">
                Staff Access
              </p>
              <h3 className="mt-4 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
                Secure staff login for daily financial operations.
              </h3>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
                Authorized staff can access the My Money operations system for teller work,
                reporting, and administrative control.
              </p>

              <div className="mt-8">
                <a
                  href={staffUrl}
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0a1f44] transition hover:bg-blue-50"
                >
                  Open Staff System
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-gray-400 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© 2026 MIGoC My Money Financial Services. All rights reserved.</p>
          <p>Clean access. Trusted service. Modern financial operations.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;