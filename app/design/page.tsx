import Link from "next/link";

const Design = () => {
  return (
    <section>
      <header>
        <div className="">
          <div className="flex justify-between items-center text-[#ffffff]">
            <Link href="/" className="">
              myteam
            </Link>
            <nav>
              <ul>
                <li>home</li>
                <li>about</li>
              </ul>
            </nav>
            <button>contact us</button>
          </div>
        </div>
      </header>
      <div>
        <h1>Colors</h1>
      </div>
      {/* <section>
        <div>
          <div>
            <h1>find the best talent</h1>
          </div>
          <div>
            <div />
            <p>
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <div>
              <div />
              <h2>Build & manage distributed teams like no one else.</h2>
            </div>
            <div>
              <div>
                <div>image goes here</div>
                <div>
                  <h3>Experienced Individuals</h3>
                  <p>
                    Our network is made up of highly experienced professionals
                    who are passionate about what they do.
                  </p>
                </div>
              </div>
              <div>
                <div>image goes here</div>
                <div>
                  <h3>Easy to Implement</h3>
                  <p>
                    Our processes have been refined over years of implementation
                    meaning our teams always deliver.
                  </p>
                </div>
              </div>
              <div>
                <div>image goes here</div>
                <div>
                  <h3>Enhanced Productivity</h3>
                  <p>
                    Our customized platform with in-built analytics helps you
                    manage your distributed teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </section>
  );
};

export default Design;
