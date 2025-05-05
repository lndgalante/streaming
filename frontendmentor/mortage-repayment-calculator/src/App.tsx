import { PiCalculatorFill } from "react-icons/pi";

import { ResultsVector } from "./components/ResultsVector";

function App() {
  return (
    <main className="bg-ui-slate-100 min-h-screen flex justify-center items-center p-0 sm:p-10 font-jakarta">
      <div className="bg-ui-white flex flex-col lg:flex-row w-full max-w-(--container-max-width) sm:rounded-(--radius-ui-container)">
        <div className="min-h-(--form-min-height) py-8 px-6 sm:p-10 flex flex-col gap-10">
          <header className="flex justify-between items-center">
            <h1 className="text-ui-slate-900 text-2xl font-bold">Mortage Calculator</h1>
            <button type="button" className="text-ui-slate-700 underline">
              Clear All
            </button>
          </header>

          <form>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <label htmlFor="mortage_amount" className="text-ui-slate-700 font-medium">
                  Mortage Amount
                </label>
                <div className="flex flex-row border rounded-sm border-ui-slate-500">
                  <div className="bg-ui-slate-100 font-bold text-ui-slate-700 py-3 px-4 rounded-tl-sm rounded-bl-sm">
                    £
                  </div>
                  <input type="number" className="flex-1  py-3 px-4" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-3 flex-1">
                  <label htmlFor="mortage_term" className="text-ui-slate-700 font-medium">
                    Mortage Term
                  </label>
                  <div className="flex flex-row border rounded-sm border-ui-slate-500">
                    <input type="number" className="flex-1  py-3 px-4" />
                    <div className="bg-ui-slate-100 font-bold text-ui-slate-700 py-3 px-4 rounded-tr-sm rounded-br-sm">
                      years
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <label htmlFor="interest_rate" className="text-ui-slate-700 font-medium">
                    Intereset Rate
                  </label>
                  <div className="flex flex-row border rounded-sm border-ui-slate-500">
                    <input type="number" className="flex-1  py-3 px-4" />
                    <div className="bg-ui-slate-100 font-bold text-ui-slate-700 py-3 px-4 rounded-tr-sm rounded-br-sm">
                      %
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-ui-slate-700 font-medium">Mortage Type</p>
                <div className="flex flex-col gap-3">
                  <label className="text-ui-slate-700 font-medium rounded-sm border border-ui-slate-500 px-4 py-3 flex flex-row gap-4 cursor-pointer">
                    <input type="radio" name="mortage_type" value="repayment" />
                    <span className="font-bold text-ui-slate-900">Repayment</span>
                  </label>

                  <label className="text-ui-slate-700 font-medium rounded-sm border border-ui-slate-500 px-4 py-3 flex flex-row gap-4 cursor-pointer">
                    <input type="radio" name="mortage_type" value="interest_only" />
                    <span className="font-bold text-ui-slate-900">Interest Only</span>
                  </label>
                </div>
              </div>
            </div>
          </form>

          <footer>
            <button
              type="button"
              className="bg-ui-lime rounded-full py-4 px-10 font-bold text-ui-slate-900 w-full sm:w-fit flex flex-row items-center gap-3"
            >
              <PiCalculatorFill className="fill-ui-slate-900 size-6" />
              Calculate Repayments
            </button>
          </footer>
        </div>
        <div className="lg:min-w-[460px] bg-ui-slate-900 sm:min-h-(requests-sm-min-height) md:min-h-(requests-md-min-height) py-8 px-6 sm:p-10 rounded-tr-none md:rounded-tr-(--radius-ui-container) rounded-br-none sm:rounded-br-(--radius-ui-container) rounded-bl-none sm:rounded-bl-(--radius-ui-container) lg:rounded-bl-(--radius-ui-box) flex justify-center items-center flex-col gap-4 text-center">
          <ResultsVector />
          <p className="text-ui-white font-bold text-2xl">Results shown here</p>
          <p className="text-ui-slate-300">
            Complete the form and click "calculate repayments" to see what your monthly repayments would be.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
