exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('paragraphs')
    .del()
    .then(() => knex('remarks').del())
    .then(() => {
      return Promise.all([
        knex('remarks')
          .insert(
            {
              title: 'The Title',
              topic: 'TOPIC ONE',
              date: '2/12/2018'
            },
            'id'
          )
          .then(remark => {
            return knex('paragraphs').insert([
              {
                remarks_id: remark[0],
                length: 'long',
                text:
                  'Well, thank you everybody.  This has been long in the making.  You’ve heard many, many speeches by me and talks by me, and interviews where I talk about unfair trade practices.  We’ve lost, over a fairly short period of time, 60,000 factories in our country — closed, shuttered, gone.  Six million jobs, at least, gone.  And now they’re starting to come back.  You see what’s happening with Chrysler, with Foxconn, with so many other companies wanting to come back into the United States.'
              },
              {
                remarks_id: remark[0],
                length: 'short',
                text:
                  'But we have one particular problem.  And I view them as a friend; I have tremendous respect for President Xi.'
              },
              {
                remarks_id: remark[0],
                length: 'short',
                text:
                  'We have a great relationship.  They’re helping us a lot in North Korea.  And that’s China.'
              },
              {
                remarks_id: remark[0],
                length: 'medium',
                text:
                  'But we have a trade deficit, depending on the way you calculate, of $504 billion.  Now, some people would say it’s really $375 billion.  Many different ways of looking at it, but any way you look at it, it is the largest deficit of any country in the history of our world.  It’s out of control.'
              },
              {
                remarks_id: remark[0],
                length: 'medium',
                text:
                  'We have a tremendous intellectual property theft situation going on, which likewise is hundreds of billions of dollars.  And that’s on a yearly basis.  I’ve spoken to the President.  I’ve spoken to representatives of China.  We’ve been dealing with it very seriously.'
              },
              {
                remarks_id: remark[0],
                length: 'medium',
                text:
                  'As you know, we’re renegotiating NAFTA.  We’ll see how that turns out.  Many countries are calling to negotiate better trade deals because they don’t want to have to pay the steel and aluminum tariffs.  And we are negotiating with various countries — Mr. Lighthizer, Mr. Ross.'
              },
              {
                remarks_id: remark[0],
                length: 'medium',
                text:
                  'We are just starting a negotiation with the European Union because they’ve really shut out our country to a large extent.  They have barriers that — they can trade with us but we can’t trade with them.  They’re very strong barriers.  They have very high tariffs.  We don’t.  It’s just not fair.'
              },
              {
                remarks_id: remark[0],
                length: 'short',
                text:
                  'NAFTA has been a very bad deal for the United States, but we’ll make it better or we’ll have to do something else.  The deal we have with South Korea is a very one-sided deal.  It’s a deal that has to be changed.'
              },
              {
                remarks_id: remark[0],
                length: 'short',
                text:
                  'So we have a lot of things happening.  But in particular, with China, we’re going to be doing a Section 301 trade action.  It could be about $60 billion but that’s really just a fraction of what we’re talking about.'
              },
              {
                remarks_id: remark[0],
                length: 'medium',
                text:
                  'I’ve been speaking with the highest Chinese representatives, including the President, and I’ve asked them to reduce the trade deficit immediately by $100 billion.  It’s a lot.  So that would be anywhere from 25 percent, depending on the way you figure, to maybe something even more than that.  But we have to do that.'
              },
              {
                remarks_id: remark[0],
                length: 'long',
                text:
                  'The word that I want to use is “reciprocal.”  When they charge 25 percent for a car to go in, and we charge 2 percent for their car to come into the United States, that’s not good.  That’s how China rebuilt itself.  The tremendous money that we’ve paid since the founding of the World Trade Organization — which has actually been a disaster for us.  It’s been very unfair to us.  The arbitrations are very unfair.  The judging has been very unfair.'
              },
              {
                remarks_id: remark[0],
                length: 'short',
                text:
                  'And knowingly, we always have a minority and it’s not fair.'
              },
              {
                remarks_id: remark[0],
                length: 'medium',
                text:
                  'So we’re talking to World Trade, we’re talking to NAFTA, we’re talking to China, we’re talking to the European Union.  And I will say, every single one of them wants to negotiate.  And I believe that, in many cases — maybe all cases — we’ll end up negotiating a deal.'
              },
              {
                remarks_id: remark[0],
                length: 'medium',
                text:
                  'So we’ve spoken to China and we’re in the midst of a very large negotiation.  We’ll see where it takes us.  But in the meantime, we are sending a Section 301 action.  I’ll be signing it right here, right now.  I’d like to ask Bob Lighthizer to say a few words about the 301 and where we are in that negotiation.'
              },
              {
                remarks_id: remark[0],
                length: 'long',
                text:
                  'And we’re doing things for this country that should have been done for many, many years.  We’ve had this abuse by many other countries and groups of countries that were put together in order to take advantage of the United States, and we don’t want that to happen.  We’re not going to let that happen.  It’s probably one of the reasons I was elected; maybe one of the main reasons.  But we’re not going to let that happen.'
              },
              {
                remarks_id: remark[0],
                length: 'medium',
                text:
                  'We have, right now, an $800 billion trade deficit with the world.  So think of that.  So let’s say we have 500 to 375, but let’s say we have 500 with China, but we have 800 total with the world.  That would mean that China is more than half.  So we’re going to get it taken care of.  And, frankly, it’s going to make us a much stronger, much richer nation.'
              },
              {
                remarks_id: remark[0],
                length: 'medium',
                text:
                  'The word is “reciprocal.”  That’s the word I want everyone to remember.  We want reciprocal — mirror.  Some people call it a mirror tariff or a mirror tax.  Just use the word reciprocal.  If they charge us, we charge them the same thing.  That’s the way it’s got to be.  That’s not the way it is.  For many, many years — for many decades, it has not been that way.'
              },
              {
                remarks_id: remark[0],
                length: 'short',
                text:
                  'And I will say, the people we’re negotiating with — smilingly, they really agree with us.  I really believe they cannot believe they’ve gotten away with this for so long.'
              },
              {
                remarks_id: remark[0],
                length: 'medium',
                text:
                  'I’ll talk to Prime Minister Abe of Japan and others — great guy, friend of mine — and there will be a little smile on their face.  And the smile is, “I can’t believe we’ve been able to take advantage of the United States for so long.”  So those days are over.'
              },
              {
                remarks_id: remark[0],
                length: 'short',
                text: 'Ambassador Lighthizer, thank you.'
              },
              {
                remarks_id: remark[0],
                length: 'short',
                text: 'Thank you very much, Bob.  Secretary Ross.'
              },
              {
                remarks_id: remark[0],
                length: 'short',
                text: 'Mike Pence, would you like to say something?'
              },
              {
                remarks_id: remark[0],
                length: 'short',
                text:
                  'So we’ll sign right now.  I just want to let everybody know, just for a second time, that we are in the midst of very major and very positive negotiations.  Positive for the United States and, actually, very positive for other countries also.'
              },
              {
                remarks_id: remark[0],
                length: 'medium',
                text:
                  'We have some of our great business leaders — and leaders, period — right behind me.  I may ask Marillyn — Lockheed — the leading woman’s business executive in this country, according to many.  And we buy billions and billions of dollars’ worth of that beautiful F-35.  It’s stealth.  You cannot see it.  Is that correct?'
              },
              {
                remarks_id: remark[0],
                length: 'short',
                text: 'Better be correct.  Right?'
              },
              {
                remarks_id: remark[0],
                length: 'short',
                text: 'Marillyn, please say a few words.'
              },
              {
                remarks_id: remark[0],
                length: 'short',
                text: 'Thank you, Marillyn.'
              },
              {
                remarks_id: remark[0],
                length: 'short',
                text:
                  'This is the first of many.  This is number one, but this is the first of many.'
              },
              {
                remarks_id: remark[0],
                length: 'short',
                text:
                  'Thank you all very much.  Marillyn.  Thank you very much.'
              },
              {
                remarks_id: remark[0],
                length: 'short',
                text: 'I would like to.  I would like to.'
              }
            ]);
          })
          .then(() => console.log('Seeding complete!'))
          .catch(error => console.log(`Error seeding data: ${error}`))
      ]);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
